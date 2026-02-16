"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Trash2, Edit, Save, X, Star } from "lucide-react";
import { toast } from "sonner";
import { ProductReview, ShopTab } from "@/lib/shop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReviewManager() {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [tabs, setTabs] = useState<ShopTab[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    productId: "",
    tabId: "",
    author: "",
    role: "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    fetchReviews();
    fetchTabs();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/shop/reviews");
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      toast.error("Failed to fetch reviews");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingId
        ? `/api/shop/reviews?id=${editingId}`
        : "/api/shop/reviews";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(editingId ? "Review updated" : "Review created");
        resetForm();
        fetchReviews();
      } else {
        toast.error("Failed to save review");
      }
    } catch (error) {
      toast.error("Error saving review");
    }
  };

  const handleEdit = (review: ProductReview) => {
    setFormData({
      productId: review.productId || "",
      tabId: review.tabId,
      author: review.author,
      role: review.role,
      rating: review.rating,
      comment: review.comment,
    });
    setEditingId(review.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this review?")) return;

    try {
      const res = await fetch(`/api/shop/reviews?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Review deleted");
        fetchReviews();
      } else {
        toast.error("Failed to delete review");
      }
    } catch (error) {
      toast.error("Error deleting review");
    }
  };

  const resetForm = () => {
    setFormData({
      productId: "",
      tabId: "",
      author: "",
      role: "",
      rating: 5,
      comment: "",
    });
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product Reviews</h2>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isEditing ? "Cancel" : "Add Review"}
        </Button>
      </div>

      {isEditing && (
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Author Name *</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Role/Position *</Label>
                <Input
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
              <div>
                <Label>Rating (1-5) *</Label>
                <Input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating || 5}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) || 5 })}
                  required
                />
              </div>
            </div>

            <div>
              <Label>Review Comment *</Label>
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              {editingId ? "Update Review" : "Create Review"}
            </Button>
          </form>
        </Card>
      )}

      <div className="grid gap-4">
        {reviews.map((review) => {
          const tab = tabs.find(t => t.id === review.tabId);
          return (
            <Card key={review.id} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {tab?.name || 'Unknown Tab'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">"{review.comment}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{review.author}</p>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(review)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(review.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
