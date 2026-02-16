"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { JobProvider, useJobs } from '@/contexts/job-context';
import { MapPin, Clock, ArrowLeft, Send, CheckCircle2, Briefcase, Users, Target, Share2, ChevronRight, Building2, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function JobDetailContent() {
    const params = useParams();
    const router = useRouter();
    const { getJobById, jobs } = useJobs();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null as File | null,
        coverLetter: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [timer, setTimer] = useState(0);

    React.useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const job = getJobById(params.id as string);

    /*
    const sendOtp = async () => {
        if (!formData.email) {
            alert('Please enter your email address');
            return;
        }

        try {
            const response = await fetch('/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email })
            });

            const result = await response.json();
            if (result.success) {
                setOtpSent(true);
                setTimer(60);
                alert('OTP sent to your email');
            } else {
                alert(result.message || 'Failed to send OTP');
            }
        } catch (error) {
            alert('Error sending OTP');
        }
    };
    */

    /*
    const verifyOtp = async () => {
        if (!otp) {
            alert('Please enter OTP');
            return;
        }

        setIsVerifyingOtp(true);
        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, otp })
            });

            const result = await response.json();
            if (result.success) {
                setEmailVerified(true);
                setOtpSent(false);
                alert('Email verified successfully');
            } else {
                alert(result.message || 'Invalid OTP');
            }
        } catch (error) {
            alert('Error verifying OTP');
        } finally {
            setIsVerifyingOtp(false);
        }
    };
    */

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
                <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-md mx-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8 text-slate-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-[#090D28] mb-2">Job Not Found</h1>
                    <p className="text-[#6B7280] mb-6">The position you are looking for might have been filled or doesn't exist.</p>
                    <button
                        onClick={() => router.push('/career')}
                        className="w-full bg-[#1D31C3] text-white px-6 py-3 rounded-xl hover:bg-[#162299] transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Careers
                    </button>
                </div>
            </div>
        );
    }

    const handleCopyLink = () => {
        const jobUrl = typeof window !== 'undefined' ? window.location.href : '';
        navigator.clipboard.writeText(jobUrl).then(() => {
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        /*
        if (!emailVerified) {
            alert('Please verify your email first');
            return;
        }
        */

        if (!formData.resume) {
            alert('Please upload your resume');
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('jobTitle', job.title);
            formDataToSend.append('jobId', job.id);
            formDataToSend.append('coverLetter', formData.coverLetter);
            if (formData.resume) {
                formDataToSend.append('resume', formData.resume);
            }

            const response = await fetch('/api/apply-job', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
                setEmailVerified(false);
                setOtp('');
            } else {
                alert(result.message || 'Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans">
            {/* Navigation Header */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40"
            >
                <div className="max-w-[1200px] mx-auto px-4 py-3">
                    <button
                        onClick={() => router.push('/career')}
                        className="group flex items-center gap-2 text-slate-500 hover:text-[#1D31C3] transition-colors font-medium text-sm"
                    >
                        <div className="p-1 rounded-full group-hover:bg-[#1D31C3]/10 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        Back to All Jobs
                    </button>
                </div>
            </motion.div>

            <div className="max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Job Header Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 bg-[#1D31C3]/10 text-[#1D31C3] text-xs font-bold uppercase tracking-wider rounded-full">
                                        {job.type}
                                    </span>
                                    {job.department && (
                                        <span className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                            {job.department}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1.5 px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Hiring Now
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-[#090D28] mb-6 leading-[1.1] tracking-tight">
                                    {job.title}
                                </h1>

                                <div className="flex flex-wrap gap-y-4 gap-x-8 text-slate-500">
                                    <div className="flex items-center gap-2.5">
                                        <div className="p-2 bg-slate-50 rounded-lg">
                                            <MapPin className="w-5 h-5 text-[#1D31C3]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Location</p>
                                            <p className="text-sm font-bold text-slate-700">{job.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <div className="p-2 bg-slate-50 rounded-lg">
                                            <Building2 className="w-5 h-5 text-[#1D31C3]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Experience</p>
                                            <p className="text-sm font-bold text-slate-700">{job.experienceLevel || 'Mid-Senior Level'}</p>
                                        </div>
                                    </div>

                                    {/* {job.salaryMin && (
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-2 bg-slate-50 rounded-lg">
                                                <Wallet className="w-5 h-5 text-[#1D31C3]" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Salary Range</p>
                                                <p className="text-sm font-bold text-slate-700">
                                                    ${(job.salaryMin / 1000).toFixed(0)}k - {(job.salaryMax ? job.salaryMax / 1000 : 0).toFixed(0)}k <span className="text-slate-400 font-normal">/ year</span>
                                                </p>
                                            </div>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </motion.div>

                        {/* Description Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-blue-50 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-[#1D31C3]" />
                                </div>
                                <h2 className="text-xl font-bold text-[#090D28]">About The Role</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p className="text-[17px]">{job.description}</p>
                            </div>
                        </motion.div>

                        {/* Responsibilities */}
                        {job.responsibilities && job.responsibilities.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 bg-rose-50 rounded-xl">
                                        <Target className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <h2 className="text-xl font-bold text-[#090D28]">Key Responsibilities</h2>
                                </div>
                                <div className="grid gap-4">
                                    {job.responsibilities.map((resp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                                        >
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-rose-600 shadow-sm">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-slate-700 font-medium leading-relaxed">{resp}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Requirements */}
                        {job.requirements && job.requirements.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 bg-indigo-50 rounded-xl">
                                        <Users className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h2 className="text-xl font-bold text-[#090D28]">Requirements</h2>
                                </div>
                                <div className="grid gap-4">
                                    {job.requirements.map((req, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-4 p-4 rounded-2xl bg-indigo-50/30 border border-indigo-100/50 hover:border-indigo-200 transition-colors"
                                        >
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-slate-700 font-medium leading-relaxed">{req}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Application Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="sticky top-24"
                        >
                            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                    <h3 className="text-lg font-black text-[#090D28] mb-1">Apply Now</h3>
                                    <p className="text-sm text-slate-500">Take the next step in your career</p>
                                </div>

                                <div className="p-6">
                                    {submitted ? (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                                                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#090D28] mb-2">Application Sent!</h3>
                                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                                Thank you for your interest. We have received your application and will be in touch shortly.
                                            </p>
                                            <button
                                                onClick={() => router.push('/career')}
                                                className="w-full bg-[#1D31C3] text-white py-3 px-4 rounded-xl hover:bg-[#162299] transition-all font-semibold shadow-lg shadow-blue-900/20"
                                            >
                                                Explore More Jobs
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Full Name</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => {
                                                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                                                            setFormData({ ...formData, name: value });
                                                        }}
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D31C3] focus:bg-white text-sm font-medium transition-all"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Email Address</label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                // Basic email format validation
                                                                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                                                                    e.target.setCustomValidity('Please enter a valid email address');
                                                                } else {
                                                                    e.target.setCustomValidity('');
                                                                }
                                                                setFormData({ ...formData, email: value });
                                                                setEmailVerified(false);
                                                                setOtpSent(false);
                                                            }}
                                                            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D31C3] focus:bg-white text-sm font-medium transition-all"
                                                            placeholder="Enter your Email"
                                                            disabled={emailVerified}
                                                        />
                                                        {/* {!emailVerified && (
                                                            <button
                                                                type="button"
                                                                onClick={sendOtp}
                                                                disabled={timer > 0}
                                                                className={`px-2 py-3 ${timer > 0 ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#1D31C3] hover:bg-[#162299] cursor-pointer'} text-white rounded-xl transition-all text-xs font-bold whitespace-nowrap`}
                                                            >
                                                                {timer > 0 ? `Resend in ${timer}s` : (otpSent ? 'Resend OTP' : 'Send OTP')}
                                                            </button>
                                                        )}
                                                        {emailVerified && (
                                                            <div className="px-4 py-3 bg-green-100 text-green-700 rounded-xl text-xs font-bold flex items-center gap-1">
                                                                <CheckCircle2 className="w-4 h-4" />
                                                                Verified
                                                            </div>
                                                        )} */}
                                                    </div>
                                                    {/* {otpSent && !emailVerified && (
                                                        <div className="mt-2 flex gap-2">
                                                            <input
                                                                type="text"
                                                                value={otp}
                                                                onChange={(e) => setOtp(e.target.value)}
                                                                className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D31C3] text-sm"
                                                                placeholder="Enter OTP"
                                                                maxLength={6}
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={verifyOtp}
                                                                disabled={isVerifyingOtp}
                                                                className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all text-xs font-bold disabled:opacity-50 cursor-pointer"
                                                            >
                                                                {isVerifyingOtp ? 'Verifying...' : 'Verify'}
                                                            </button>
                                                        </div>
                                                    )} */}
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={formData.phone}
                                                        onChange={(e) => {
                                                            const value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                                                            setFormData({ ...formData, phone: value });
                                                        }}
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D31C3] focus:bg-white text-sm font-medium transition-all"
                                                        placeholder="Enter your mobile number"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Resume / CV</label>
                                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-[#1D31C3] transition-all group">
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            {formData.resume ? (
                                                                <>
                                                                    <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                                                    <p className="text-sm text-slate-700 font-medium text-center px-4 truncate max-w-full">
                                                                        {formData.resume.name}
                                                                    </p>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="p-2 mb-2 bg-slate-100 rounded-full group-hover:bg-[#1D31C3]/10 transition-colors">
                                                                        <Share2 className="w-5 h-5 text-slate-400 group-hover:text-[#1D31C3]" />
                                                                    </div>
                                                                    <p className="text-sm text-slate-500"><span className="font-semibold text-[#1D31C3]">Click to upload</span> or drag and drop</p>
                                                                    <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                                                                </>
                                                            )}
                                                        </div>
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) {
                                                                    if (file.size > 5 * 1024 * 1024) {
                                                                        alert('File size must be less than 5MB');
                                                                        e.target.value = '';
                                                                        return;
                                                                    }
                                                                    setFormData({ ...formData, resume: file });
                                                                } else {
                                                                    setFormData({ ...formData, resume: null });
                                                                }
                                                            }}
                                                        />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Cover Letter (Optional)</label>
                                                    <textarea
                                                        rows={3}
                                                        value={formData.coverLetter}
                                                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D31C3] focus:bg-white text-sm font-medium transition-all"
                                                        placeholder="Tell us why you're a great fit..."
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full group mt-6 bg-[#1D31C3] text-white py-4 px-6 rounded-xl hover:bg-[#162299] transition-all font-bold shadow-xl shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative cursor-pointer"
                                            >
                                                <div className="relative z-10 flex items-center justify-center gap-2">
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Submit Application
                                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </>
                                                    )}
                                                </div>
                                            </button>

                                            <p className="text-center text-xs text-slate-400 mt-4">
                                                By submitting, you agree to our <a href="/termsofservice" className="underline hover:text-[#1D31C3]">Terms</a> and <a href="/privacypolicy" className="underline hover:text-[#1D31C3]">Privacy Policy</a>.
                                            </p>
                                        </form>
                                    )}
                                </div>

                                {/* Share Links */}
                                <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Share this job</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleCopyLink}
                                            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-[#1D31C3] hover:border-[#1D31C3] transition-colors"
                                            title="Copy Link"
                                        >
                                            {linkCopied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
                                        </button>
                                        {/* LinkedIn, Twitter, etc. icons could go here */}
                                    </div>
                                </div>
                            </div>

                            {/* Company Micro-Card */}
                            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                                    <img src="/images/logo.png" alt="Nigsoft" className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#090D28]">Nigsoft</h4>
                                    <a href="/about" className="text-xs text-[#1D31C3] font-semibold hover:underline">View Company Profile</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function JobDetailClient() {
    return (
        <JobProvider>
            <JobDetailContent />
        </JobProvider>
    );
}
