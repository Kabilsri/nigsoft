"use client";

import { JobProvider } from "@/contexts/job-context";
import { EnhancedAuthProvider, useEnhancedAuth } from "@/contexts/enhanced-auth-context";
import { SessionProvider } from "@/contexts/session-context";
import EnhancedDashboard from "@/components/admin/enhanced-dashboard";
import EnhancedAdminLogin from "@/components/admin/enhanced-login";

function AdminContent() {
    const { isAuthenticated } = useEnhancedAuth();

    if (!isAuthenticated) {
        return <EnhancedAdminLogin />;
    }

    return <EnhancedDashboard />;
}

export default function AdminClient() {
    return (
        <EnhancedAuthProvider>
            <SessionProvider>
                <JobProvider>
                    <AdminContent />
                </JobProvider>
            </SessionProvider>
        </EnhancedAuthProvider>
    );
}
