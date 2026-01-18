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

export type DiagramType = 'SEQUENCE' | 'CLASS' | 'COMPONENT' | 'USECASE' | 'ACTIVITY' | 'FLOW' | 'CUSTOM';

export interface Diagram {
    id: string;
    workspaceId: string;
    title: string;
    type: DiagramType;
    content: string; // PlantUML code
    version: number;
    updatedAt: string;
}

export const DIAGRAM_TYPES: { code: DiagramType; label: string; defaultCode: string }[] = [
    {
        code: 'SEQUENCE',
        label: 'Sequence Diagram',
        defaultCode: `@startuml\nAlice -> Bob: Hello\nBob --> Alice: Hi there\n@enduml`
    },
    {
        code: 'CLASS',
        label: 'Class Diagram',
        defaultCode: `@startuml\nclass Car {\n  - String model\n  + void drive()\n}\n@enduml`
    },
    {
        code: 'COMPONENT',
        label: 'Component Diagram',
        defaultCode: `@startuml\n[Component] --> [Interface]\n@enduml`
    },
    {
        code: 'USECASE',
        label: 'Use Case Diagram',
        defaultCode: `@startuml\nUser -> (Start)\nUser --> (Use the application) : Label\n@enduml`
    },
    {
        code: 'ACTIVITY',
        label: 'Activity Diagram',
        defaultCode: `@startuml\nstart\n:Hello world;\nstop\n@enduml`
    },
    {
        code: 'FLOW',
        label: 'Flow Chart',
        defaultCode: `@startuml\n:Start;\n:Process;\n:End;\n@enduml`
    },
    {
        code: 'CUSTOM',
        label: 'Custom Diagram',
        defaultCode: `@startuml\n' Add your custom PlantUML code here\n@enduml`
    }
];
