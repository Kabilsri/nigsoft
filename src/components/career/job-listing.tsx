"use client";

import React from "react";
import Link from "next/link";
import { useJobs } from "@/contexts/job-context";
import { MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";

const JobListing = () => {
  const { jobs } = useJobs();

  const getJobTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'part-time':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'contract':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'internship':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="jobs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020D2C] mb-4">
            Open Positions
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Join our team and help us build the future of business technology
          </p>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#1D31C3]/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-[#020D2C] group-hover:text-[#1D31C3] transition-colors">
                        {job.title}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border w-fit ${getJobTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </div>
                    
                    <p className="text-[#6B7280] mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experienceLevel || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Posted {job.postedDate ? new Date(job.postedDate).toLocaleDateString() : 'Recently'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    {/* {(job.salaryMin || job.salaryMax) && (
                      <div className="text-right">
                        <p className="text-lg font-semibold text-[#020D2C]">
                          {job.salaryMin && job.salaryMax 
                            ? `₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()}`
                            : job.salaryMin 
                            ? `₹${job.salaryMin.toLocaleString()}+`
                            : job.salaryMax 
                            ? `Up to ₹${job.salaryMax.toLocaleString()}`
                            : 'Competitive'
                          }
                        </p>
                        <p className="text-sm text-[#6B7280]">{job.salaryMin || job.salaryMax ? 'per month' : ''}</p>
                      </div>
                    )} */}
                    
                    <Link
                      href={`/jobs/${job.id}`}
                      className="inline-flex items-center gap-2 bg-[#1D31C3] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#162299] transition-colors group/btn"
                    >
                      Apply Now
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#020D2C] mb-2">
                No Open Positions
              </h3>
              <p className="text-[#6B7280] mb-6">
                We don't have any open positions at the moment, but we're always looking for talented individuals.
              </p>
            <a href="mailto:careers@nigsoft.com" className="inline-flex items-center gap-2 border-2 border-[#1D31C3] text-[#1D31C3] px-6 py-2.5 rounded-lg font-medium hover:bg-[#1D31C3]/5 transition-colors">
              Send Us Your Resume
              <ChevronRight className="w-4 h-4" />
            </a>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {jobs.length > 0 && (
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-[#6B7280] mb-4">
              Don't see a position that fits? We're always looking for exceptional talent.
            </p>
            <a href="mailto:hr@nigsoft.com" className="inline-flex items-center gap-2 border-2 border-[#1D31C3] text-[#1D31C3] px-6 py-3 rounded-lg font-medium hover:bg-[#1D31C3]/5 transition-colors">
              Send Us Your Resume
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;