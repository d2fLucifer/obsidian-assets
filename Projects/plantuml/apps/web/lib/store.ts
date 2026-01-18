import { create } from 'zustand';
import { Diagram, DiagramType, Workspace } from './types';
import { DiagramService, WorkspaceService } from './services/mock';

interface AppState {
    // Workspace State
    workspaces: Workspace[];
    currentWorkspace: Workspace | null;

    // Diagram State
    diagrams: Diagram[];
    currentDiagram: Diagram | null;

    // UI State
    isLoading: boolean;
    error: string | null;

    // Actions
    loadWorkspaces: () => Promise<void>;
    selectWorkspace: (id: string) => void;
    createWorkspace: (name: string) => Promise<void>;

    loadDiagrams: (workspaceId: string) => Promise<void>;
    createDiagram: (workspaceId: string, name: string, type: DiagramType) => Promise<void>;
    selectDiagram: (id: string) => void;
    saveDiagram: (id: string, content: string) => Promise<void>;
}

export const useStore = create<AppState>((set, get) => ({
    workspaces: [],
    currentWorkspace: null,
    diagrams: [],
    currentDiagram: null,
    isLoading: false,
    error: null,

    loadWorkspaces: async () => {
        set({ isLoading: true, error: null });
        try {
            const workspaces = await WorkspaceService.list();
            set({ workspaces, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    selectWorkspace: async (id: string) => {
        const workspace = await WorkspaceService.get(id);
        set({ currentWorkspace: workspace, currentDiagram: null, diagrams: [] });
        if (workspace) {
            // Load diagrams for the selected workspace
            get().loadDiagrams(workspace.id);
        }
    },

    createWorkspace: async (name: string) => {
        set({ isLoading: true, error: null });
        try {
            const newWorkspace = await WorkspaceService.create(name);
            set((state) => ({
                workspaces: [...state.workspaces, newWorkspace],
                currentWorkspace: newWorkspace,
                isLoading: false
            }));
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    loadDiagrams: async (workspaceId: string) => {
        set({ isLoading: true, error: null });
        try {
            const diagrams = await DiagramService.list(workspaceId);
            set({ diagrams, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    createDiagram: async (workspaceId: string, name: string, type: DiagramType) => {
        set({ isLoading: true, error: null });
        try {
            const newDiagram = await DiagramService.create(workspaceId, name, type);
            set((state) => ({
                diagrams: [...state.diagrams, newDiagram],
                currentDiagram: newDiagram,
                isLoading: false
            }));
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    selectDiagram: async (id: string) => {
        const diagram = await DiagramService.get(id);
        set({ currentDiagram: diagram });
    },

    saveDiagram: async (id: string, content: string) => {
        // Optimistic update could go here, but for now we wait for "server"
        try {
            const updatedDiagram = await DiagramService.update(id, content);
            set((state) => ({
                diagrams: state.diagrams.map((d) => (d.id === id ? updatedDiagram : d)),
                currentDiagram: updatedDiagram,
            }));
        } catch (error) {
            set({ error: (error as Error).message });
        }
    },
}));
