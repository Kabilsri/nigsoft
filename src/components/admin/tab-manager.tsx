"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Trash2, Edit, Save, X } from "lucide-react";
import { toast } from "sonner";
import { ShopTab } from "@/lib/shop";

export default function TabManager() {
  const [tabs, setTabs] = useState<ShopTab[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    order: 1,
  });

  useEffect(() => {
    fetchTabs();
  }, []);

  const fetchTabs = async () => {
    try {
      const res = await fetch("/api/shop/tabs");
      const data = await res.json();
      setTabs(data.sort((a: ShopTab, b: ShopTab) => a.order - b.order));
    } catch (error) {
      toast.error("Failed to fetch tabs");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingId
        ? `/api/shop/tabs?id=${editingId}`
        : "/api/shop/tabs";
      const method = editingId ? "PUT" : "POST";

      // Auto-assign order if creating new tab
      const submitData = editingId ? formData : { ...formData, order: tabs.length + 1 };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (res.ok) {
        toast.success(editingId ? "Tab updated" : "Tab created");
        resetForm();
        fetchTabs();
      } else {
        toast.error("Failed to save tab");
      }
    } catch (error) {
      toast.error("Error saving tab");
    }
  };

  const handleEdit = (tab: ShopTab) => {
    setFormData({
      name: tab.name,
      slug: tab.slug,
      description: tab.description,
      order: tab.order,
    });
    setEditingId(tab.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this tab? Products in this tab will need reassignment.")) return;

    try {
      const res = await fetch(`/api/shop/tabs?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Tab deleted");
        fetchTabs();
      } else {
        toast.error("Failed to delete tab");
      }
    } catch (error) {
      toast.error("Error deleting tab");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      order: tabs.length + 1,
    });
    setEditingId(null);
    setIsEditing(false);
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
        <h2 className="text-2xl font-bold">Shop Tabs</h2>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isEditing ? "Cancel" : "Add Tab"}
        </Button>
      </div>

      {isEditing && (
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Tab Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (!editingId) {
                      setFormData({ ...formData, name: e.target.value, slug: generateSlug(e.target.value) });
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

            <div>
              <Label>Description *</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              {editingId ? "Update Tab" : "Create Tab"}
            </Button>
          </form>
        </Card>
      )}

      <div className="grid gap-4">
        {tabs.map((tab) => (
          <Card key={tab.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{tab.name}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Order: {tab.order}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{tab.description}</p>
                <p className="text-xs text-gray-400">Slug: {tab.slug}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(tab)}>
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(tab.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
