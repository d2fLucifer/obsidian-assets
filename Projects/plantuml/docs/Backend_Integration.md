# Backend Integration Guide

This document outlines the requirements and specifications for integrating the Java Spring Boot backend with the PlantUML Pro frontend.

## 1. Architecture Overview

The backend will serve as the source of truth for all data, replacing the current `MockService` in the frontend.

- **Framework**: Spring Boot 3.2+ (Java 21)
- **Database**: PostgreSQL 16+
- **Authentication**: JWT (Stateless)
- **API Style**: RESTful JSON

## 2. Entity Relationship Diagram (ERD)

### Users (`users`)
| Column          | Type         | Constraints      | Description            |
| :-------------- | :----------- | :--------------- | :--------------------- |
| `id`            | UUID         | PK               | Unique user identifier |
| `email`         | VARCHAR(255) | UNIQUE, NOT NULL | User email             |
| `password_hash` | VARCHAR(255) | NOT NULL         | BCrypt hashed password |
| `full_name`     | VARCHAR(100) |                  | Display name           |
| `created_at`    | TIMESTAMP    | DEFAULT NOW()    |                        |

### Workspaces (`workspaces`)
| Column       | Type         | Constraints    | Description                    |
| :----------- | :----------- | :------------- | :----------------------------- |
| `id`         | UUID         | PK             | Unique workspace identifier    |
| `name`       | VARCHAR(100) | NOT NULL       | Workspace name                 |
| `owner_id`   | UUID         | FK -> users.id | Creator/Owner of the workspace |
| `created_at` | TIMESTAMP    | DEFAULT NOW()  |                                |

### Workspace Members (`workspace_members`)
| Column         | Type        | Constraints                       | Description  |
| :------------- | :---------- | :-------------------------------- | :----------- |
| `workspace_id` | UUID        | FK -> workspaces.id               |              |
| `user_id`      | UUID        | FK -> users.id                    |              |
| `role`         | VARCHAR(20) | ENUM('OWNER', 'EDITOR', 'VIEWER') | Access level |
| `joined_at`    | TIMESTAMP   | DEFAULT NOW()                     |              |

### Diagrams (`diagrams`)
| Column         | Type         | Constraints         | Description                     |
| :------------- | :----------- | :------------------ | :------------------------------ |
| `id`           | UUID         | PK                  | Unique diagram identifier       |
| `workspace_id` | UUID         | FK -> workspaces.id | Parent workspace                |
| `title`        | VARCHAR(255) | NOT NULL            | Diagram title                   |
| `content`      | TEXT         |                     | PlantUML source code            |
| `type`         | VARCHAR(50)  |                     | SEQUENCE, CLASS, FLOW, etc.     |
| `version`      | INT          | DEFAULT 1           | Optimistic locking / Versioning |
| `updated_at`   | TIMESTAMP    | DEFAULT NOW()       |                                 |

## 3. API Specification

### Authentication
- `POST /api/auth/login`: Returns JWT token.
- `POST /api/auth/register`: Creates new user.

### Workspaces
- `GET /api/workspaces`: List workspaces for current user.
- `POST /api/workspaces`: Create a new workspace.
- `GET /api/workspaces/{id}`: Get workspace details.

### Diagrams
- `GET /api/workspaces/{workspaceId}/diagrams`: List diagrams in a workspace.
- `POST /api/workspaces/{workspaceId}/diagrams`: Create a new diagram.
- `GET /api/diagrams/{id}`: Get diagram content.
- `PUT /api/diagrams/{id}`: Update diagram content (increments version).

## 4. Frontend Integration Steps

1.  **Environment Variables**: Update `.env.local` to point to the real backend URL.
    ```
    NEXT_PUBLIC_API_URL=http://localhost:8080/api
    ```
2.  **Service Layer**: Replace `apps/web/lib/services/mock.ts` with `api.ts` using `fetch` or `axios`.
3.  **Authentication**: Implement `AuthProvider` to handle JWT storage and header injection.

## 5. Future Considerations

- **Real-time Collaboration**: WebSocket integration for live editing (using Yjs or similar).
- **Diagram Rendering**: Server-side rendering of PlantUML to SVG to reduce client load (optional, currently client-side).
