import { PlantUMLEditor } from "@/components/PlantUMLEditor";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditorPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-black">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back
                    </Link>
                    <span className="font-bold">Untitled Diagram</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-400">Auto-saved</div>
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                </div>
            </header>
            <main className="flex-1">
                <PlantUMLEditor />
            </main>
        </div>
    );
}
