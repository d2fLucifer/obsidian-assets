#project #middle_se
# 🧩 Project Requirements — Mini Task Manager (Java Console App)

> Month 1 goal: strengthen **Java Core fundamentals** — OOP, memory management, concurrency, and clean code.  
> Focus on *understanding how Java works internally*, not frameworks.

---

## 🎯 Purpose
Build a **console-based Java application** to practice:
- JVM, memory model, garbage collection
- Threading and synchronization
- Collections and Stream API
- Exception handling and clean architecture

---

## 🧱 Functional Requirements

1. **Task Management**
   - Add, view, update, and delete tasks.
   - Each task must include:
     - ID (auto-increment)
     - Title
     - Description
     - Status (Pending / Done)
     - CreatedAt timestamp

2. **Search & Filter**
   - Search tasks by keyword (case-insensitive).
   - Filter completed or pending tasks using Stream API.

3. **Auto Save (Concurrency Feature)**
   - Run a background thread to save all tasks to file every 10 seconds.
   - Ensure synchronization between threads.

4. **Data Persistence**
   - Store tasks in a text file (`tasks.txt`) or JSON.
   - File operations must be thread-safe.

5. **Error Handling**
   - Create custom exceptions (e.g., `TaskNotFoundException`).
   - Use `try-with-resources` and provide meaningful messages.

6. **Graceful Exit**
   - Stop background threads safely.
   - Save unsaved tasks before exiting.

---

## ⚙️ Technical Requirements

| Category | Requirement |
|-----------|-------------|
| **Java Version** | Java 17+ (preferably Java 21 LTS) |
| **Paradigm** | OOP (Encapsulation, Inheritance, Polymorphism, Abstraction) |
| **Concurrency** | Use `Thread`, `Runnable`, or `ExecutorService` |
| **Collections** | Use `List`, `Map`, and `Set` appropriately |
| **Streams & Lambda** | Filter, map, and sort tasks with Streams |
| **Exception Handling** | Implement custom exception classes |
| **File I/O** | Use `BufferedWriter`, `BufferedReader`, or `Files` API |
| **Testing** | At least 3 JUnit 5 test cases |
| **Documentation** | UML (class + sequence) and README.md |

---

## 🧠 Learning Objectives

| Topic | You Should Master |
|--------|--------------------|
| **JVM Architecture** | Class loading, stack vs heap, method area, GC |
| **Memory Model** | Object allocation, GC triggers |
| **Garbage Collection** | Observe GC logs using `-verbose:gc` |
| **Concurrency** | Shared data handling, synchronization, deadlock |
| **Streams & Lambda** | Functional-style filtering and transformations |
| **Exception Design** | Reusable, meaningful custom exceptions |
| **Clean Code** | SOLID principles, effective naming, no duplication |
| **Profiling** | Use VisualVM / IntelliJ Profiler to inspect heap & threads |

---

## 🧩 Deliverables

1. **Source Code Repository**
src/main/java/com/yourname/taskmanager  
src/test/java/com/yourname/taskmanager  
README.md  
pom.xml

2. **Documentation**
- UML (sequence + class diagram)
- `docs/jvm_notes.md` — explain JVM internals
- README.md with setup guide & your learning summary

3. **Code Quality**
- No hardcoded paths
- Consistent formatting & naming
- Comments only where logic isn’t self-explanatory

---

## 🔥 Optional “Middle-Level” Challenges

1. Use `ScheduledExecutorService` instead of manual threads.  
2. Implement a **generic repository pattern** (`Repository<T>`).  
3. Add **JSON serialization** using Gson or Jackson.  
4. Experiment with `WeakReference` / `SoftReference` for GC.  
5. Log heap usage before and after each save.  
6. Benchmark `ArrayList` vs `LinkedList` performance.  
7. Apply **SOLID principles** (SRP, OCP).  
8. Add logging with `java.util.logging`.

---

## ✅ Completion Criteria

| Area | Criteria for “Middle-level Readiness” |
|------|----------------------------------------|
| **Code Understanding** | Can explain memory + thread behavior in your code |
| **Debugging** | Can detect memory leaks, deadlocks, or race conditions |
| **Design Thinking** | Code is modular, extensible, and readable |
| **Tooling** | Comfortable using Git, Maven, and debugging tools |
| **Documentation** | UML + notes explain design clearly |

---

## 🗓️ (Optional) 4-Week Execution Plan

| Week | Focus | Deliverable |
|------|--------|-------------|
| **Week 1** | JVM, memory model, OOP | Implement `Task` + `TaskService` |
| **Week 2** | Exception & Collections | Add error handling and CRUD logic |
| **Week 3** | Multithreading | Add auto-save and concurrency features |
| **Week 4** | Streams, GC, Clean Code | Add filters, GC observation, refactor, UML |

---

> 💡 *By finishing this project properly, you’ll reach a strong Java Core foundation equivalent to a solid mid-level engineer.*

