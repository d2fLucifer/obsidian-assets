# Frontend Architecture Design (FE-Only, Backend-Ready)

This document outlines the frontend architecture to support **Workspaces**, **Diagram Management**, and **Mock APIs**, ensuring seamless integration with a future Java backend.

## 1. Architecture Overview

We will use a **Service-Based Architecture** to decouple the UI from the data source.

```mermaid
graph TD
    UI[React Components] --> Store[Zustand Store]
    Store --> Service[Service Layer]
    Service --> Mock[Mock API / LocalStorage]
    Service -.-> RealAPI[Real Backend API (Future)]
```

### Key Principles
- **Context-Aware**: The app always knows the current `Workspace` and `Diagram`.
- **Backend-Agnostic**: UI components never call `localStorage` or `fetch` directly; they call `Service` methods.
- **Type-Safe**: All entities (`Workspace`, `Diagram`) are typed with TypeScript interfaces matching the future backend DTOs.

## 2. Domain Models (TypeScript Interfaces)

```typescript
// types/domain.ts

export type Role = 'ADMIN' | 'EDITOR' | 'VIEWER';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Workspace {
  id: string;
  name: string;
  role: Role; // Current user's role in this workspace
  createdAt: string;
}

export type DiagramType = 'SEQUENCE' | 'CLASS' | 'COMPONENT' | 'USECASE' | 'ACTIVITY';

export interface Diagram {
  id: string;
  workspaceId: string;
  title: string;
  type: DiagramType;
  content: string; // PlantUML code
  version: number;
  updatedAt: string;
}
```

## 3. State Management (Zustand)

We will use **Zustand** for global state management due to its simplicity and performance.

### Store Structure
```typescript
interface AppState {
  // Workspace State
  workspaces: Workspace[];
  currentWorkspace: Workspace | null;
  
  // Diagram State
  diagrams: Diagram[]; // Diagrams in current workspace
  currentDiagram: Diagram | null;
  
  // UI State
  isLoading: boolean;
  error: string | null;

  // Actions
  loadWorkspaces: () => Promise<void>;
  selectWorkspace: (id: string) => void;
  createWorkspace: (name: string) => Promise<void>;
  
  loadDiagrams: (workspaceId: string) => Promise<void>;
  createDiagram: (name: string, type: DiagramType) => Promise<void>;
  saveDiagram: (id: string, content: string) => Promise<void>;
}
```

## 4. Service Layer (Mock API)

The service layer will simulate network delays and handle data persistence using `localStorage` for now.

### `WorkspaceService`
- `list(): Promise<Workspace[]>`
- `create(name: string): Promise<Workspace>`
- `get(id: string): Promise<Workspace>`

### `DiagramService`
- `list(workspaceId: string): Promise<Diagram[]>`
- `create(workspaceId: string, name: string, type: DiagramType): Promise<Diagram>`
- `update(id: string, content: string): Promise<Diagram>`
- `getTypes(): Promise<{code: DiagramType, label: string}[]>`

## 5. Directory Structure

```
apps/web/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx             # Landing / Redirect
│   │   ├── workspaces/
│   │   │   ├── page.tsx         # Workspace List / Create
│   │   │   └── [id]/
│   │   │       ├── page.tsx     # Workspace Dashboard
│   │   │       └── editor/
│   │   │           └── [diagramId]/
│   │   │               └── page.tsx # Diagram Editor
├── components/
│   ├── workspace/               # Workspace specific components
│   ├── diagram/                 # Diagram specific components
│   └── shared/                  # Reusable UI components
├── lib/
│   ├── store.ts                 # Zustand store
│   ├── services/                # Service layer (Mock implementations)
│   └── types.ts                 # Domain interfaces
```

## 6. Implementation Plan

1.  **Setup**: Create `types.ts`, `services/`, and `store.ts`.
2.  **Mock Data**: Implement `LocalStorage` logic in services.
3.  **Workspace UI**: Build "Create Workspace" and "Dashboard" screens.
4.  **Diagram UI**: Build "Create Diagram" modal and list view.
5.  **Editor Integration**: Connect existing `PlantUMLEditor` to the new state and routing.
