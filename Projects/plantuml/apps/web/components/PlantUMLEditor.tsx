"use client";

import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import plantumlEncoder from "plantuml-encoder";
import {
    Loader2,
    Save,
    Share2,
    ZoomIn,
    ZoomOut,
    Maximize,
    Download,
    Copy,
    RotateCcw,
    GripVertical,
} from "lucide-react";
import {
    TransformWrapper,
    TransformComponent,
    ReactZoomPanPinchContentRef,
} from "react-zoom-pan-pinch";
import {
    Separator,
    Panel,
    Group,
} from "react-resizable-panels";

const DEFAULT_CODE = `@startuml
actor User
participant "Web App" as Web
participant "PlantUML Server" as Server

User -> Web: Types PlantUML code
Web -> Web: Encodes code
Web -> Server: Requests image
Server -> Web: Returns PNG/SVG
Web -> User: Displays diagram
@enduml`;

interface PlantUMLEditorProps {
    initialCode?: string;
    onCodeChange?: (code: string) => void;
    readOnly?: boolean;
}

export function PlantUMLEditor({ initialCode = DEFAULT_CODE, onCodeChange, readOnly = false }: PlantUMLEditorProps) {
    const [code, setCode] = useState(initialCode);
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const transformComponentRef = useRef<ReactZoomPanPinchContentRef>(null);

    useEffect(() => {
        if (initialCode !== code) { // Only update if initialCode actually changed and is different from current state
            setCode(initialCode);
        }
    }, [initialCode]); // Depend on initialCode

    useEffect(() => {
        setLoading(true);
        const encoded = plantumlEncoder.encode(code);
        // Ideally: const url = `http://localhost:8080/png/${encoded}`;
        const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;
        setImageUrl(url);
    }, [code]);

    const handleEditorChange = (value: string | undefined) => {
        const newCode = value || "";
        setCode(newCode);
        onCodeChange?.(newCode);
    };

    const handleDownload = async () => {
        if (!imageUrl) return;
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "diagram.svg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.error("Download failed", e);
        }
    };

    const handleCopy = async () => {
        if (imageUrl) {
            await navigator.clipboard.writeText(imageUrl);
            alert("Image URL copied to clipboard!");
        }
    };

    return (
        <div className="h-[calc(100vh-4rem)] w-full">
            <Group orientation="horizontal">
                {/* Editor Pane */}
                <Panel defaultSize={50} minSize={20} className="flex flex-col border-r bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-center justify-between border-b px-4 py-2 bg-white dark:bg-gray-950">
                        <span className="text-sm font-medium">Editor</span>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-md" title="Save">
                                <Save className="h-4 w-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-md" title="Share">
                                <Share2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Editor
                            height="100%"
                            defaultLanguage="plantuml"
                            value={code}
                            onChange={handleEditorChange}
                            theme="vs-dark"
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                scrollBeyondLastLine: false,
                                wordWrap: "on",
                                automaticLayout: true,
                                readOnly: readOnly,
                            }}
                        />
                    </div>
                </Panel>

                <Separator className="w-2 bg-gray-100 dark:bg-gray-800 border-l border-r border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-col-resize">
                    <GripVertical className="h-4 w-4 text-gray-400" />
                </Separator>

                {/* Preview Pane */}
                <Panel defaultSize={50} minSize={20} className="flex flex-col bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                    <div className="flex items-center justify-between border-b px-4 py-2 bg-white dark:bg-gray-950 z-10">
                        <span className="text-sm font-medium">Preview</span>
                        {loading && <Loader2 className="h-4 w-4 animate-spin text-blue-500" />}
                    </div>

                    {/* Toolbar */}
                    <div className="absolute top-14 right-4 z-20 flex flex-col gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <button
                            onClick={() => transformComponentRef.current?.zoomIn()}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                            title="Zoom In"
                        >
                            <ZoomIn className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => transformComponentRef.current?.zoomOut()}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                            title="Zoom Out"
                        >
                            <ZoomOut className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => transformComponentRef.current?.resetTransform()}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                            title="Reset"
                        >
                            <RotateCcw className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => transformComponentRef.current?.centerView()}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                            title="Fit View"
                        >
                            <Maximize className="h-4 w-4" />
                        </button>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 my-1" />
                        <button
                            onClick={handleDownload}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                            title="Download SVG"
                        >
                            <Download className="h-4 w-4" />
                        </button>
                        <button
                            onClick={handleCopy}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200"
                            title="Copy URL"
                        >
                            <Copy className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex-1 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]">
                        <TransformWrapper
                            ref={transformComponentRef}
                            initialScale={1}
                            minScale={0.5}
                            maxScale={4}
                            centerOnInit
                            limitToBounds={false}
                        >
                            <TransformComponent
                                wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing"
                                contentClass="!w-full !h-full flex items-center justify-center p-10"
                            >
                                {imageUrl ? (
                                    <div className="bg-white p-4 rounded-lg shadow-xl ring-1 ring-black/5 transition-all duration-200">
                                        <img
                                            src={imageUrl}
                                            alt="PlantUML Diagram"
                                            className="max-w-none" // Allow zoom to exceed container
                                            onLoad={() => setLoading(false)}
                                        />
                                    </div>
                                ) : (
                                    <div className="text-gray-400">Start typing to see the diagram...</div>
                                )}
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </Panel>
            </Group>
        </div>
    );
}
