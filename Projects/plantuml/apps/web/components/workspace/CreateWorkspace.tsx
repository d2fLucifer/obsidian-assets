"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CreateWorkspace() {
    const [name, setName] = useState("");
    const createWorkspace = useStore((state) => state.createWorkspace);
    const isLoading = useStore((state) => state.isLoading);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        await createWorkspace(name);
        setName("");
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create New Workspace</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="flex gap-4">
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Workspace Name (e.g., My Project)"
                        className="flex-1"
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading || !name.trim()}
                    >
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                        Create
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
