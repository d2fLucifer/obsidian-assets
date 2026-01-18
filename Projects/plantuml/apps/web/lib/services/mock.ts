import { v4 as uuidv4 } from 'uuid';
import { Diagram, DiagramType, Workspace, DIAGRAM_TYPES } from '../types';

const STORAGE_KEYS = {
    WORKSPACES: 'plantuml_workspaces',
    DIAGRAMS: 'plantuml_diagrams',
};

// Helper to simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const WorkspaceService = {
    async list(): Promise<Workspace[]> {
        await delay(500);
        const data = localStorage.getItem(STORAGE_KEYS.WORKSPACES);
        return data ? JSON.parse(data) : [];
    },

    async create(name: string): Promise<Workspace> {
        await delay(500);
        const workspaces = await this.list();
        const newWorkspace: Workspace = {
            id: uuidv4(),
            name,
            role: 'ADMIN',
            createdAt: new Date().toISOString(),
        };
        workspaces.push(newWorkspace);
        localStorage.setItem(STORAGE_KEYS.WORKSPACES, JSON.stringify(workspaces));
        return newWorkspace;
    },

    async get(id: string): Promise<Workspace | null> {
        await delay(300);
        const workspaces = await this.list();
        return workspaces.find((w) => w.id === id) || null;
    },
};

export const DiagramService = {
    async list(workspaceId: string): Promise<Diagram[]> {
        await delay(500);
        const data = localStorage.getItem(STORAGE_KEYS.DIAGRAMS);
        const allDiagrams: Diagram[] = data ? JSON.parse(data) : [];
        return allDiagrams.filter((d) => d.workspaceId === workspaceId);
    },

    async create(workspaceId: string, name: string, type: DiagramType): Promise<Diagram> {
        await delay(500);
        const data = localStorage.getItem(STORAGE_KEYS.DIAGRAMS);
        const allDiagrams: Diagram[] = data ? JSON.parse(data) : [];

        const typeConfig = DIAGRAM_TYPES.find(t => t.code === type);
        const defaultCode = typeConfig ? typeConfig.defaultCode : '@startuml\n@enduml';

        const newDiagram: Diagram = {
            id: uuidv4(),
            workspaceId,
            title: name,
            type,
            content: defaultCode,
            version: 1,
            updatedAt: new Date().toISOString(),
        };

        allDiagrams.push(newDiagram);
        localStorage.setItem(STORAGE_KEYS.DIAGRAMS, JSON.stringify(allDiagrams));
        return newDiagram;
    },

    async update(id: string, content: string): Promise<Diagram> {
        await delay(300);
        const data = localStorage.getItem(STORAGE_KEYS.DIAGRAMS);
        const allDiagrams: Diagram[] = data ? JSON.parse(data) : [];

        const index = allDiagrams.findIndex((d) => d.id === id);
        if (index === -1) throw new Error('Diagram not found');

        const updatedDiagram = {
            ...allDiagrams[index],
            content,
            version: allDiagrams[index].version + 1,
            updatedAt: new Date().toISOString(),
        };

        allDiagrams[index] = updatedDiagram;
        localStorage.setItem(STORAGE_KEYS.DIAGRAMS, JSON.stringify(allDiagrams));
        return updatedDiagram;
    },

    async get(id: string): Promise<Diagram | null> {
        await delay(300);
        const data = localStorage.getItem(STORAGE_KEYS.DIAGRAMS);
        const allDiagrams: Diagram[] = data ? JSON.parse(data) : [];
        return allDiagrams.find((d) => d.id === id) || null;
    },
};
