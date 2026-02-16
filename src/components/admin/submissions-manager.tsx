"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, Phone, Calendar, FileText } from "lucide-react";
import { toast } from "sonner";

interface JobApplication {
  id: string;
  job_id: string;
  job_title: string;
  name: string;
  email: string;
  phone: string;
  experience?: string;
  resume_path?: string;
  cover_letter?: string;
  status: string;
  created_at: string;
}

interface ScheduleCall {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  preferred_date?: string;
  preferred_time?: string;
  status: string;
  created_at: string;
}

interface BookDemo {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  product?: string;
  message?: string;
  preferred_date?: string;
  status: string;
  created_at: string;
}

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

export default function SubmissionsManager() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'calls' | 'demos' | 'hims'>('jobs');
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [scheduleCalls, setScheduleCalls] = useState<ScheduleCall[]>([]);
  const [bookDemos, setBookDemos] = useState<BookDemo[]>([]);
  const [himsApplications, setHimsApplications] = useState<HIMSApplication[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Fetch all data at once
      const [jobsRes, callsRes, demosRes, himsRes] = await Promise.all([
        fetch('/api/admin/job-applications', { credentials: 'include' }),
        fetch('/api/admin/schedule-calls', { credentials: 'include' }),
        fetch('/api/admin/book-demos', { credentials: 'include' }),
        fetch('/api/admin/hims-applications', { credentials: 'include' })
      ]);

      if (jobsRes.ok) {
        const jobsData = await jobsRes.json();
        setJobApplications(Array.isArray(jobsData) ? jobsData : []);
      }

      if (callsRes.ok) {
        const callsData = await callsRes.json();
        setScheduleCalls(Array.isArray(callsData) ? callsData : []);
      }

      if (demosRes.ok) {
        const demosData = await demosRes.json();
        setBookDemos(Array.isArray(demosData) ? demosData : []);
      }

      if (himsRes.ok) {
        const himsData = await himsRes.json();
        setHimsApplications(Array.isArray(himsData) ? himsData : []);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'jobs') {
        const res = await fetch('/api/admin/job-applications', {
          credentials: 'include'
        });
        if (!res.ok) {
          console.error('API error:', res.status, res.statusText);
          toast.error(`Failed to fetch: ${res.status}`);
          return;
        }
        const data = await res.json();
        console.log('Job applications:', data);
        setJobApplications(Array.isArray(data) ? data : []);
      } else if (activeTab === 'calls') {
        const res = await fetch('/api/admin/schedule-calls', {
          credentials: 'include'
        });
        if (!res.ok) {
          console.error('API error:', res.status, res.statusText);
          toast.error(`Failed to fetch: ${res.status}`);
          return;
        }
        const data = await res.json();
        console.log('Schedule calls:', data);
        setScheduleCalls(Array.isArray(data) ? data : []);
      } else {
        const res = await fetch('/api/admin/book-demos', {
          credentials: 'include'
        });
        if (!res.ok) {
          console.error('API error:', res.status, res.statusText);
          toast.error(`Failed to fetch: ${res.status}`);
          return;
        }
        const data = await res.json();
        console.log('Book demos:', data);
        setBookDemos(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string, type: string) => {
    try {
      const endpoint = type === 'jobs' ? 'job-applications' : type === 'calls' ? 'schedule-calls' : type === 'hims' ? 'hims-applications' : 'book-demos';
      const res = await fetch(`/api/admin/${endpoint}?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        toast.success('Status updated');
        fetchAllData();
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const deleteItem = async (id: string, type: string) => {
    if (!confirm('Delete this submission?')) return;
    try {
      const endpoint = type === 'jobs' ? 'job-applications' : type === 'calls' ? 'schedule-calls' : type === 'hims' ? 'hims-applications' : 'book-demos';
      const res = await fetch(`/api/admin/${endpoint}?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Deleted successfully');
        fetchAllData();
      }
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Form Submissions</h2>
        <Button onClick={fetchAllData} variant="outline" size="sm">
          Refresh
        </Button>
      </div>

      <div className="flex gap-2 border-b">
        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 font-medium ${activeTab === 'jobs' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'}`}
        >
          Job Applications ({jobApplications.length})
        </button>
        <button
          onClick={() => setActiveTab('calls')}
          className={`px-4 py-2 font-medium ${activeTab === 'calls' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'}`}
        >
          Schedule Calls ({scheduleCalls.length})
        </button>
        <button
          onClick={() => setActiveTab('demos')}
          className={`px-4 py-2 font-medium ${activeTab === 'demos' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'}`}
        >
          Book Demos ({bookDemos.length})
        </button>
        <button
          onClick={() => setActiveTab('hims')}
          className={`px-4 py-2 font-medium ${activeTab === 'hims' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'}`}
        >
          HIMS Applications ({himsApplications.length})
        </button>
      </div>

      {loading && <div className="text-center py-8">Loading...</div>}

      {!loading && activeTab === 'jobs' && (
        <div className="grid gap-4">
          {jobApplications.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <p>No job applications yet</p>
            </Card>
          ) : (
            jobApplications.map((app) => (
              <Card key={app.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{app.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{app.job_title}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {app.email}</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {app.phone}</div>
                      {app.resume_path && (
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <a href={app.resume_path} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            View Resume
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(app.created_at).toLocaleDateString()}</div>
                    </div>
                    {app.cover_letter && <p className="text-sm mt-2 text-gray-700">{app.cover_letter}</p>}
                    <div className="flex gap-2 mt-3">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value, 'jobs')}
                        className="text-xs border rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive" onClick={() => deleteItem(app.id, 'jobs')}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {!loading && activeTab === 'calls' && (
        <div className="grid gap-4">
          {scheduleCalls.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <p>No schedule call requests yet</p>
            </Card>
          ) : (
            scheduleCalls.map((call) => (
              <Card key={call.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{call.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{call.company || 'No company'}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {call.email}</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {call.phone}</div>
                      {call.preferred_date && <div>Preferred: {call.preferred_date} {call.preferred_time}</div>}
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(call.created_at).toLocaleDateString()}</div>
                    </div>
                    {call.message && <p className="text-sm mt-2 text-gray-700">{call.message}</p>}
                    <div className="flex gap-2 mt-3">
                      <select
                        value={call.status}
                        onChange={(e) => updateStatus(call.id, e.target.value, 'calls')}
                        className="text-xs border rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive" onClick={() => deleteItem(call.id, 'calls')}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {!loading && activeTab === 'demos' && (
        <div className="grid gap-4">
          {bookDemos.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <p>No demo booking requests yet</p>
            </Card>
          ) : (
            bookDemos.map((demo) => (
              <Card key={demo.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{demo.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{demo.company || 'No company'} - {demo.product || 'No product'}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {demo.email}</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {demo.phone}</div>
                      {demo.preferred_date && <div>Preferred: {demo.preferred_date}</div>}
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(demo.created_at).toLocaleDateString()}</div>
                    </div>
                    {demo.message && <p className="text-sm mt-2 text-gray-700">{demo.message}</p>}
                    <div className="flex gap-2 mt-3">
                      <select
                        value={demo.status}
                        onChange={(e) => updateStatus(demo.id, e.target.value, 'demos')}
                        className="text-xs border rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive" onClick={() => deleteItem(demo.id, 'demos')}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {!loading && activeTab === 'hims' && (
        <div className="grid gap-4">
          {himsApplications.length === 0 ? (
            <Card className="p-8 text-center text-gray-500">
              <p>No HIMS applications yet</p>
            </Card>
          ) : (
            himsApplications.map((app) => (
              <Card key={app.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{app.full_name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{app.qualification} - {app.experience}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {app.email}</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {app.phone}</div>
                      <div>Role: {app.role}</div>
                      <div>Batch: {app.batch}</div>
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(app.created_at).toLocaleDateString()}</div>
                    </div>
                    {app.message && <p className="text-sm mt-2 text-gray-700">{app.message}</p>}
                    <div className="flex gap-2 mt-3">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value, 'hims')}
                        className="text-xs border rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive" onClick={() => deleteItem(app.id, 'hims')}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
}
