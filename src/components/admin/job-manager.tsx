"use client";

import React, { useState } from 'react';
import { Plus, Trash2, MapPin } from 'lucide-react';
import { useJobs } from '@/contexts/job-context';

const AdminJobManager = () => {
  const { jobs, addJob, deleteJob } = useJobs();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newJob, setNewJob] = useState({ 
    title: '', 
    location: '', 
    type: 'Full-time', 
    description: '', 
    requirements: '', 
    responsibilities: '',
    salaryMin: '',
    salaryMax: '',
    experienceLevel: 'Mid-level',
    postedDate: new Date().toISOString().split('T')[0],
    deadline: ''
  });

  const handleAddJob = () => {
    if (newJob.title && newJob.location && newJob.description) {
      const jobData = {
        ...newJob,
        salaryMin: newJob.salaryMin ? parseInt(newJob.salaryMin) : undefined,
        salaryMax: newJob.salaryMax ? parseInt(newJob.salaryMax) : undefined,
        requirements: newJob.requirements.split('\n').filter(req => req.trim()),
        responsibilities: newJob.responsibilities.split('\n').filter(resp => resp.trim())
      };
      addJob(jobData);
      setNewJob({ title: '', location: '', type: 'Full-time', description: '', requirements: '', responsibilities: '', salaryMin: '', salaryMax: '', experienceLevel: 'Mid-level', postedDate: new Date().toISOString().split('T')[0], deadline: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Job Management</h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 bg-[#E12E34] text-white px-4 py-2 rounded-lg hover:bg-[#c02329] transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Job
            </button>
          </div>

          {showAddForm && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Add New Job</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                  />
                  <select
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <textarea
                  placeholder="Job Description"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                  rows={3}
                />
                <textarea
                  placeholder="Requirements (one per line)"
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                  rows={3}
                />
                <textarea
                  placeholder="Responsibilities (one per line)"
                  value={newJob.responsibilities}
                  onChange={(e) => setNewJob({ ...newJob, responsibilities: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                  rows={3}
                />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary Min</label>
                    <input
                      type="number"
                      placeholder="25000"
                      value={newJob.salaryMin}
                      onChange={(e) => setNewJob({ ...newJob, salaryMin: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary Max</label>
                    <input
                      type="number"
                      placeholder="40000"
                      value={newJob.salaryMax}
                      onChange={(e) => setNewJob({ ...newJob, salaryMax: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                    <select
                      value={newJob.experienceLevel}
                      onChange={(e) => setNewJob({ ...newJob, experienceLevel: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                    >
                      <option value="Entry-level">Entry-level</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior">Senior</option>
                      <option value="Lead">Lead</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                    <input
                      type="date"
                      value={newJob.deadline}
                      onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E12E34]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleAddJob}
                  className="bg-[#E12E34] text-white px-4 py-2 rounded-lg hover:bg-[#c02329] transition-colors"
                >
                  Add Job
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Job"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default AdminJobManager;