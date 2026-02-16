"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Edit, Save, X, Upload, Star } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { ShopProduct, ShopTab } from "@/lib/shop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopManager() {
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [tabs, setTabs] = useState<ShopTab[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState<any>({
    name: "",
    slug: "",
    category: "",
    description: "",
    badge: "",
    rating: 4.5,
    specs: [{ label: "", value: "" }],
    image: "",
    tabId: ""
  });

  useEffect(() => {
    fetchProducts();
    fetchTabs();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/shop/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  const fetchTabs = async () => {
    try {
      const res = await fetch("/api/shop/tabs");
      const data = await res.json();
      setTabs(data);
    } catch (error) {
      toast.error("Failed to fetch tabs");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (): Promise<string> => {
    if (!imageFile) return "";

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("folder", "shop");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.filePath;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imagePath = formData.image || "";
      if (imageFile) {
        imagePath = await uploadImage();
      }

      const productData = {
        ...formData,
        image: imagePath,
        specs: formData.specs.filter((s: { label: string; value: string }) => s.label && s.value),
      };

      const url = editingId
        ? `/api/shop/products?id=${editingId}`
        : "/api/shop/products";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        toast.success(editingId ? "Product updated" : "Product created");
        resetForm();
        fetchProducts();
      } else {
        toast.error("Failed to save product");
      }
    } catch (error) {
      toast.error("Error saving product");
    }
  };

  const handleEdit = (product: ShopProduct) => {
    setFormData({
      name: product.name,
      slug: product.slug,
      category: product.category,
      description: product.description,
      badge: product.badge,
      rating: product.rating,
      specs: product.specs,
      image: product.image,
      tabId: product.tabId || "",
    });
    setImagePreview(product.image);
    setEditingId(product.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    try {
      const res = await fetch(`/api/shop/products?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Product deleted");
        fetchProducts();
      } else {
        toast.error("Failed to delete product");
      }
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      category: "",
      description: "",
      badge: "",
      rating: 4.5,
      specs: [{ label: "", value: "" }],
      tabId: "",
    });
    setImageFile(null);
    setImagePreview("");
    setEditingId(null);
    setIsEditing(false);
  };

  const addSpec = () => {
    setFormData({
      ...formData,
      specs: [...formData.specs, { label: "", value: "" }],
    });
  };

  const updateSpec = (index: number, field: "label" | "value", value: string) => {
    const newSpecs = [...formData.specs];
    newSpecs[index][field] = value;
    setFormData({ ...formData, specs: newSpecs });
  };

  const removeSpec = (index: number) => {
    setFormData({
      ...formData,
      specs: formData.specs.filter((_: any, i: number) => i !== index),
    });
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Shop Products</h2>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isEditing ? "Cancel" : "Add Product"}
        </Button>
      </div>

      {isEditing && (
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Product Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => {
                    const newName = e.target.value;
                    if (!editingId) {
                      setFormData({ ...formData, name: newName, slug: generateSlug(newName) });
                    } else {
                      setFormData({ ...formData, name: newName });
                    }
                  }}
                  required
                />
              </div>
              <div>
                <Label>Slug *</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Category *</Label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Tab *</Label>
                <Select
                  value={formData.tabId}
                  onValueChange={(value) => setFormData({ ...formData, tabId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Tab" />
                  </SelectTrigger>
                  <SelectContent>
                    {tabs.map((tab) => (
                      <SelectItem key={tab.id} value={tab.id}>
                        {tab.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Badge *</Label>
                <Input
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Rating (1-5)</Label>
                <Input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <Label>Description *</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                required
              />
            </div>

            <div>
              <Label>Product Image</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {imagePreview && (
                <div className="mt-2 relative w-32 h-32">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover rounded" />
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Specifications</Label>
                <Button type="button" size="sm" onClick={addSpec}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {formData.specs.map((spec: { label: string; value: string }, index: number) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder="Label"
                    value={spec.label}
                    onChange={(e) => updateSpec(index, "label", e.target.value)}
                  />
                  <Input
                    placeholder="Value"
                    value={spec.value}
                    onChange={(e) => updateSpec(index, "value", e.target.value)}
                  />
                  <Button type="button" size="icon" variant="destructive" onClick={() => removeSpec(index)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              {editingId ? "Update Product" : "Create Product"}
            </Button>
          </form>
        </Card>
      )}

      <div className="grid gap-4 w-full">
        {products.map((product) => (
          <Card key={product.id} className="p-4 overflow-hidden">
            <div className="flex gap-4 w-full">
              <div className="relative w-24 h-24 flex-shrink-0">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{product.category}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{product.badge}</Badge>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-2 line-clamp-2 break-all">{product.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
