"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { useParams, useRouter } from "next/navigation";
import { PlantUMLEditor } from "@/components/PlantUMLEditor";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { DIAGRAM_TYPES } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DiagramEditorPage() {
    const params = useParams();
    const router = useRouter();
    const workspaceId = params.id as string;
    const diagramId = params.diagramId as string;

    const selectDiagram = useStore((state) => state.selectDiagram);
    const currentDiagram = useStore((state) => state.currentDiagram);
    const saveDiagram = useStore((state) => state.saveDiagram);
    const isLoading = useStore((state) => state.isLoading);
    const diagrams = useStore((state) => state.diagrams);
    const loadDiagrams = useStore((state) => state.loadDiagrams);

    const [code, setCode] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        if (workspaceId && diagrams.length === 0) {
            loadDiagrams(workspaceId);
        }
    }, [workspaceId, diagrams.length, loadDiagrams]);

    useEffect(() => {
        if (diagramId) {
            selectDiagram(diagramId);
        }
    }, [diagramId, selectDiagram]);

    useEffect(() => {
        if (currentDiagram) {
            setCode(currentDiagram.content);
        }
    }, [currentDiagram]);

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
        setHasUnsavedChanges(true);
    };

    const handleSave = async () => {
        if (!currentDiagram) return;
        setIsSaving(true);
        await saveDiagram(currentDiagram.id, code);
        setIsSaving(false);
        setHasUnsavedChanges(false);
    };

    if (!currentDiagram) {
        return <div className="flex items-center justify-center min-h-screen">Loading diagram...</div>;
    }

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <Link href={`/workspaces/${workspaceId}`} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                        <ArrowLeft className="h-5 w-5 text-gray-500" />
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">{currentDiagram.title}</h1>
                            <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                {DIAGRAM_TYPES.find(t => t.code === currentDiagram.type)?.label}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500">
                            v{currentDiagram.version} • {hasUnsavedChanges ? "Unsaved changes" : "Saved"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Select
                        value={currentDiagram.id}
                        onValueChange={(newId) => {
                            if (hasUnsavedChanges) {
                                if (!confirm("You have unsaved changes. Are you sure you want to switch diagrams?")) {
                                    return;
                                }
                            }
                            router.push(`/workspaces/${workspaceId}/editor/${newId}`);
                        }}
                    >
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select diagram" />
                        </SelectTrigger>
                        <SelectContent>
                            {diagrams.map((d) => (
                                <SelectItem key={d.id} value={d.id}>
                                    {d.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={handleSave}
                        disabled={!hasUnsavedChanges || isSaving}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        {isSaving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save
                    </Button>
                </div>
            </header>

            {/* Editor */}
            <div className="flex-1 overflow-hidden">
                <PlantUMLEditor
                    initialCode={code}
                    onCodeChange={handleCodeChange}
                />
            </div>
        </div>
    );
}
