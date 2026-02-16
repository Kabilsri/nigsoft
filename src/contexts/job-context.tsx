"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salaryMin?: number;
  salaryMax?: number;
  experienceLevel?: string;
  department?: string;
  deadline?: string;
  postedDate?: string;
}

interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id'>) => Promise<void>;
  deleteJob: (id: string) => Promise<void>;
  getJobById: (id: string) => Job | undefined;
  refreshJobs: () => Promise<void>;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (jobData: Omit<Job, 'id'>) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(jobData)
      });
      
      if (!res.ok) {
        const error = await res.json();
        console.error('Failed to add job:', error);
        
        // Show validation errors if available
        if (error.details && Array.isArray(error.details)) {
          const messages = error.details.map((d: any) => `${d.path.join('.')}: ${d.message}`).join('\n');
          alert(`Validation errors:\n${messages}`);
        } else {
          alert(`Failed to add job: ${error.error || 'Unknown error'}`);
        }
        throw new Error(error.error);
      }
      
      await fetchJobs();
    } catch (error) {
      console.error('Failed to add job:', error);
      throw error;
    }
  };

  const deleteJob = async (id: string) => {
    try {
      const res = await fetch(`/api/jobs?id=${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      
      if (!res.ok) {
        const error = await res.json();
        console.error('Failed to delete job:', error);
        alert(`Failed to delete job: ${error.error || 'Unknown error'}`);
        throw new Error(error.error);
      }
      
      await fetchJobs();
    } catch (error) {
      console.error('Failed to delete job:', error);
      throw error;
    }
  };

  const getJobById = (id: string): Job | undefined => {
    return jobs.find(job => job.id === id);
  };

  const refreshJobs = async () => {
    await fetchJobs();
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob, getJobById, refreshJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within JobProvider');
  }
  return context;
};