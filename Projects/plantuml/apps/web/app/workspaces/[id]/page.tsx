"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { useParams, useRouter } from "next/navigation";
import { Plus, FileCode, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DIAGRAM_TYPES, DiagramType } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function WorkspaceDashboard() {
    const params = useParams();
    const router = useRouter();
    const workspaceId = params.id as string;

    const currentWorkspace = useStore((state) => state.currentWorkspace);
    const selectWorkspace = useStore((state) => state.selectWorkspace);
    const diagrams = useStore((state) => state.diagrams);
    const createDiagram = useStore((state) => state.createDiagram);
    const isLoading = useStore((state) => state.isLoading);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newDiagramName, setNewDiagramName] = useState("");
    const [newDiagramType, setNewDiagramType] = useState<DiagramType>("SEQUENCE");

    useEffect(() => {
        if (workspaceId) {
            selectWorkspace(workspaceId);
        }
    }, [workspaceId, selectWorkspace]);

    const handleCreateDiagram = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newDiagramName.trim()) return;

        await createDiagram(workspaceId, newDiagramName, newDiagramType);
        setIsModalOpen(false);
        setNewDiagramName("");
        // Ideally redirect to the new diagram editor
        // const newDiagram = useStore.getState().currentDiagram;
        // if (newDiagram) router.push(`/workspaces/${workspaceId}/editor/${newDiagram.id}`);
    };

    if (!currentWorkspace && isLoading) {
        return <div className="flex items-center justify-center min-h-screen">Loading workspace...</div>;
    }

    if (!currentWorkspace && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <h1 className="text-2xl font-bold">Workspace not found</h1>
                <Link href="/workspaces" className="text-blue-500 hover:underline">
                    Back to Workspaces
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/workspaces" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                        <ArrowLeft className="h-5 w-5 text-gray-500" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{currentWorkspace?.name}</h1>
                        <p className="text-sm text-gray-500">Workspace Dashboard</p>
                    </div>
                </div>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Plus className="h-4 w-4 mr-2" />
                            New Diagram
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Diagram</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleCreateDiagram} className="space-y-4 mt-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Diagram Name</Label>
                                <Input
                                    id="name"
                                    value={newDiagramName}
                                    onChange={(e) => setNewDiagramName(e.target.value)}
                                    placeholder="e.g., Login Flow"
                                    autoFocus
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="type">Type</Label>
                                <Select value={newDiagramType} onValueChange={(value) => setNewDiagramType(value as DiagramType)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a diagram type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {DIAGRAM_TYPES.map((type) => (
                                            <SelectItem key={type.code} value={type.code}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={!newDiagramName.trim() || isLoading}>
                                    {isLoading ? "Creating..." : "Create Diagram"}
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </header>

            {/* Content */}
            <main className="p-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {diagrams.map((diagram) => (
                        <Link key={diagram.id} href={`/workspaces/${workspaceId}/editor/${diagram.id}`}>
                            <Card className="hover:border-blue-500 transition-colors cursor-pointer group h-full">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10 transition-colors w-full mb-2">
                                        <FileCode className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
                                    </div>
                                </CardHeader>
                                <div className="px-6 pb-4">
                                    <CardTitle className="text-base font-semibold truncate mb-1">{diagram.title}</CardTitle>
                                    <CardDescription className="flex items-center justify-between">
                                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                            {DIAGRAM_TYPES.find(t => t.code === diagram.type)?.label || diagram.type}
                                        </span>
                                        <span className="text-xs text-gray-400">v{diagram.version}</span>
                                    </CardDescription>
                                </div>
                            </Card>
                        </Link>
                    ))}

                    {/* Empty State */}
                    {diagrams.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                            <p>No diagrams yet.</p>
                            <button onClick={() => setIsModalOpen(true)} className="text-blue-500 hover:underline mt-2">
                                Create your first diagram
                            </button>
                        </div>
                    )}
                </div>
            </main>


        </div>
    );
}
