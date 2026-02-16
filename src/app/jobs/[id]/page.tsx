import type { Metadata } from "next";
import JobDetailClient from "@/components/career/job-detail-client";

export const metadata: Metadata = {
  title: "Job Details | Careers at Nigsoft",
  description: "Explore exciting career opportunities at Nigsoft. Join our team and help us build the future of healthcare technology.",
  keywords: "Nigsoft careers, software jobs, healthcare tech jobs, job opportunities",
};

export default function JobDetailPage() {
  return <JobDetailClient />;
}