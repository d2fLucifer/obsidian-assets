"use client";

import { useEffect } from "react";
import { useStore } from "@/lib/store";
import { CreateWorkspace } from "@/components/workspace/CreateWorkspace";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function WorkspacesPage() {
    const workspaces = useStore((state) => state.workspaces);
    const loadWorkspaces = useStore((state) => state.loadWorkspaces);
    const isLoading = useStore((state) => state.isLoading);

    useEffect(() => {
        loadWorkspaces();
    }, [loadWorkspaces]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Workspaces</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage your projects and diagrams.</p>
                </div>

                <CreateWorkspace />

                <div className="grid gap-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Your Workspaces</h2>
                    {isLoading && workspaces.length === 0 ? (
                        <div className="text-center py-10 text-gray-500">Loading workspaces...</div>
                    ) : workspaces.length === 0 ? (
                        <div className="text-center py-10 bg-white dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 text-gray-500">
                            No workspaces found. Create one to get started.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {workspaces.map((workspace) => (
                                <Link key={workspace.id} href={`/workspaces/${workspace.id}`}>
                                    <Card className="hover:border-blue-500 transition-colors cursor-pointer group h-full">
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                                <Briefcase className="h-5 w-5 text-blue-500" />
                                                {workspace.name}
                                            </CardTitle>
                                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                {workspace.role} • Created {new Date(workspace.createdAt).toLocaleDateString()}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
