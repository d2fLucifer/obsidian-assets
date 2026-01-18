# Walkthrough - Workspaces & Diagrams

I have refactored the frontend to support a complete **Workspace-based workflow** with **Mock APIs**, ready for backend integration.

## Features Implemented

### 1. Workspace Management
- **Create Workspace**: Create new workspaces (projects).
- **Dashboard**: View all your workspaces.
- **Mock Persistence**: Data is saved to `localStorage`, simulating a backend.

### 2. Diagram Management
- **Create Diagram**: Create diagrams with specific types (Sequence, Class, Component, Activity, Flow, Custom).
- **Diagram Types**: Pre-configured templates for different PlantUML types.
- **Dashboard**: List diagrams within a workspace with metadata (type, version).

### 3. Editor Integration
- **Diagram Switcher**: Quickly switch between diagrams in the same workspace using the dropdown in the header.
- **State Management**: The editor is now connected to the global `Zustand` store.
- **Auto-Save Simulation**: "Save" button updates the mock backend and increments the version.
- **Unsaved Changes**: UI indicator when code is modified but not saved.

## How to Test

1.  **Go to Workspaces**: Navigate to `/workspaces`.
2.  **Create Workspace**: Enter a name (e.g., "My Project") and click Create.
3.  **Open Workspace**: Click on the new workspace card.
4.  **Create Diagram**: Click "New Diagram", enter a name, and select a type (e.g., "Flow Chart").
5.  **Edit & Save**: Modify the code in the editor and click "Save".
6.  **Switch Diagram**: Create another diagram, then use the dropdown in the editor header to switch between them.
7.  **Verify Persistence**: Refresh the page; your workspace and diagrams should remain.

## Architecture Notes
- **Store**: `apps/web/lib/store.ts` (Zustand)
- **Services**: `apps/web/lib/services/mock.ts` (Simulates API calls)
- **Types**: `apps/web/lib/types.ts` (Domain models)
