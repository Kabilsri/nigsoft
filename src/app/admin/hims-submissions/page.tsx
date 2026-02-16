"use client";

import { useState, useEffect } from "react";
import { Trash2, Mail, Phone, GraduationCap, Briefcase, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

interface HIMSApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
  role: string;
  batch: string;
  message?: string;
  status: string;
  created_at: string;
}

export default function HIMSSubmissionsPage() {
  const [applications, setApplications] = useState<HIMSApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/admin/hims-applications");
      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/hims-applications?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchApplications();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    try {
      await fetch(`/api/admin/hims-applications?id=${id}`, { method: "DELETE" });
      fetchApplications();
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">HIMS Certification Applications</h1>
          <div className="text-sm text-gray-500">Total: {applications.length}</div>
        </div>

        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{app.full_name}</h3>
                  <p className="text-sm text-gray-500">{new Date(app.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(app.status)}`}>
                    {app.status}
                  </span>
                  <button
                    onClick={() => deleteApplication(app.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  {app.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  {app.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  {app.qualification}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  {app.experience}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  {app.role}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {app.batch}
                </div>
              </div>

              {app.message && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{app.message}</p>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(app.id, "approved")}
                  className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(app.id, "pending")}
                  className="flex items-center gap-1 px-3 py-1.5 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  Pending
                </button>
                <button
                  onClick={() => updateStatus(app.id, "rejected")}
                  className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          ))}

          {applications.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No applications yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
