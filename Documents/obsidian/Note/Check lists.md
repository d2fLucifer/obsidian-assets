### **Tháng 1 — Java Core Foundation**

#### 🎯 Mục tiêu

Hiểu rõ cơ chế hoạt động của Java, nắm chắc nền tảng lập trình hướng đối tượng.

#### ✅ Checklist

-  Hiểu JVM: Classloader, Stack vs Heap, GC
    
-  Hiểu Memory model và Object lifecycle
    
-  Ôn OOP: Encapsulation, Inheritance, Polymorphism, Abstraction
    
-  Collection Framework (List, Set, Map, Queue)
    
-  Generics, Exception Handling, Stream API, Lambda
    
-  Hiểu Immutability, Autoboxing, String Pool
    
-  Vẽ sequence diagram mô tả lifecycle của object
    

#### 🧩 Mini Project

-  Viết app console quản lý sinh viên (CRUD + file I/O)
    
-  Áp dụng OOP và Collection framework
    

#### 📚 Resource

- Effective Java (Joshua Bloch) — Chương 1–4
    
- Java Brains, Baeldung articles
    
- VisualVM (để xem JVM memory hoạt động)
    

---

### 📅 **Tháng 2 — Spring Core & Spring Boot**

#### 🎯 Mục tiêu

Hiểu cơ chế hoạt động của Spring và tạo REST API chuẩn.

#### ✅ Checklist

-  IoC Container, Bean lifecycle, Dependency Injection
    
-  AOP, Proxy, Transaction management
    
-  Spring Boot Auto Configuration
    
-  REST Controller, Request/Response Mapping
    
-  Exception Handling (GlobalExceptionHandler)
    
-  Validation và DTO pattern
    
-  Logging cơ bản (SLF4J, Logback)
    
-  Unit test bằng JUnit + Mockito
    

#### 🧩 Mini Project

-  Xây REST API CRUD (Todo list hoặc Student service)
    
-  Tạo cấu trúc clean theo package-by-feature
    
-  Test controller + service layer
    

#### 📚 Resource

- Spring Docs (spring.io)
    
- Baeldung — “Spring Core” & “Spring Boot”
    
- “Spring in Action” — Chương 1–5
    

---

### 📅 **Tháng 3 — Database, JPA & Docker**

#### 🎯 Mục tiêu

Kết nối backend với DB, hiểu ORM và vận hành hệ thống trong container.

#### ✅ Checklist

-  Cấu hình JPA, Entity, Repository, Relationship (OneToMany, ManyToMany)
    
-  Native query, Pagination, Specification API
    
-  Hiểu SQL, Index, Transaction isolation levels
    
-  Docker cơ bản: image, container, volume, network
    
-  Docker Compose (backend + PostgreSQL)
    
-  Environment variables và secrets
    

#### 🧩 Mini Project

-  Viết Todo service có DB PostgreSQL
    
-  Đóng gói bằng Docker, chạy Compose
    
-  Tạo script init DB
    

#### 📚 Resource

- Baeldung “Spring Data JPA”
    
- Docker Docs — “Getting Started”
    
- DBeaver để visualize DB
    

---

### 📅 **Tháng 4 — CI/CD, Logging, Monitoring**

#### 🎯 Mục tiêu

Biết deploy hệ thống tự động và theo dõi log hiệu quả.

#### ✅ Checklist

-  CI/CD với GitHub Actions hoặc GitLab CI
    
-  Build, test, deploy pipeline tự động
    
-  Caching build (maven caching, docker caching)
    
-  Log structuring, centralized logging (ELK / Loki cơ bản)
    
-  Health check endpoint `/actuator/health`
    
-  Config multi-env (dev/staging/prod)
    

#### 🧩 Mini Project

-  Tích hợp CI/CD cho project Todo
    
-  Deploy auto build Docker image và run container
    
-  Thêm logging + monitoring basic
    

#### 📚 Resource

- GitHub Actions Docs
    
- Baeldung — “Spring Boot Actuator”
    
- Medium: “Spring Boot Logging Best Practices”
    

---

### 📅 **Tháng 5 — DSA + Clean Code + Refactoring**

#### 🎯 Mục tiêu

Nâng khả năng tư duy thuật toán và viết code sạch.

#### ✅ Checklist

-  Ôn DSA: Array, Stack, Queue, Map, Tree, Graph
    
-  Big-O complexity
    
-  100–150 bài Leetcode Easy–Medium
    
-  Áp dụng SOLID principles
    
-  Refactor project cũ theo Clean Code
    
-  Thêm unit test coverage >70%
    
-  Dùng static code analysis (SonarLint, Checkstyle)
    

#### 🧩 Mini Project

-  Refactor lại Todo service với SOLID
    
-  Viết test cho controller/service
    
-  Optimize performance query hoặc memory
    

#### 📚 Resource

- Clean Code — Robert C. Martin
    
- Refactoring Guru — Design Patterns
    
- Leetcode / NeetCode roadmap
    

---

### 📅 **Tháng 6 — System Design & Project Understanding**

#### 🎯 Mục tiêu

Hiểu kiến trúc hệ thống, business logic và chuẩn bị mindset Middle.

#### ✅ Checklist

-  Phân tích project thật (hoặc side project):
    
    -  Tech stack
        
    -  Flow nghiệp vụ
        
    -  Pain points
        
    -  Bottleneck kỹ thuật
        
-  Hiểu cơ bản System Design:
    
    -  Caching (Redis)
        
    -  Message Queue (RabbitMQ / Kafka overview)
        
    -  Load balancing, scaling
        
-  Viết tài liệu system overview
    
-  Tự design 1 hệ thống mini microservice (User + Order service)
    

#### 🧩 Mini Project

-  Xây 2 service (user/order) có giao tiếp qua REST
    
-  CI/CD chung, logging riêng
    
-  Viết tài liệu `system_design.md`
    

#### 📚 Resource

- System Design Primer (GitHub)
    
- ByteByteGo YouTube Channel
    
- TechWorld with Nana (for architecture visuals)
    

---

### 🧠 **Tổng kết Checklist Middle-Level**

`- [ ] Deep dive into Java core (JVM, GC, multithreading, Stream API) - [ ] Deep dive into Spring (IoC, AOP, Bean lifecycle, DispatcherServlet) - [ ] Understand your project (tech stack, business, pain points) - [ ] Practice 150 Leetcode problems - [ ] Learn Docker, CI/CD, monitoring - [ ] Apply Clean Code, SOLID, Testing - [ ] Study basic System Design (microservices, caching, MQ)`

---

### 📊 Gợi ý cấu trúc trong Obsidian

`/Career/   /Roadmap_MiddleJava/     01_Java_Core.md     02_Spring_Boot.md     03_JPA_Docker.md     04_CICD_Logging.md     05_DSA_CleanCode.md     06_SystemDesign.md`

Mỗi file:

`## Progress - [ ] Task 1 - [ ] Task 2 - [ ] Task 3  ## Notes > Ghi lại insight, issue, link học  ## Resources - [link](...)`

---

Bạn có muốn mình tạo **template Obsidian `.md` sẵn có thanh progress tự động (dùng Dataview)** để bạn import trực tiếp không?  
Nó sẽ tự hiển thị “hoàn thành bao nhiêu % trong tháng này”.

##### You said:

Công ty tôi đang dùng Mybatis

###### ChatGPT said:

Rất hay 👍 — nếu công ty bạn đang dùng **MyBatis**, thì việc điều chỉnh roadmap theo đó là **rất cần thiết**, vì MyBatis khác Spring Data JPA ở chỗ:

- **Bạn kiểm soát SQL thủ công**,
    
- **Cần hiểu rõ mapper XML / annotation**,
    
- Và có thể **tối ưu truy vấn tốt hơn**, phù hợp cho middle-level dev.
    

Dưới đây là phiên bản **roadmap 6 tháng (mỗi ngày 3 tiếng)** đã **điều chỉnh cho MyBatis**, format đúng chuẩn để bạn **copy dán vào Obsidian**.

---

## 🧭 Roadmap 6 Tháng — Từ Fresher → Middle Java Developer (MyBatis Focused)

> ⏰ 3 tiếng/ngày — 18–20 tiếng/tuần  
> 🎯 Mục tiêu: Nắm chắc Java Core, Spring, MyBatis, CI/CD, Docker, Clean Code và System Design cơ bản.

---

### 📅 **Tháng 1 — Java Core Foundation**

#### 🎯 Mục tiêu

Hiểu sâu cơ chế hoạt động của Java và JVM, viết code theo tư duy hướng đối tượng.

#### ✅ Checklist

-  JVM, ClassLoader, Stack vs Heap, GC, Memory model
    
-  Object lifecycle, Immutable object, String Pool
    
-  OOP principles: Encapsulation, Inheritance, Polymorphism, Abstraction
    
-  Collection Framework (List, Set, Map, Queue)
    
-  Generics, Exception Handling, Stream API, Lambda
    
-  Threading & Synchronization cơ bản
    
-  Vẽ sequence diagram mô tả lifecycle của object và thread
    

#### 🧩 Mini Project

-  Viết console app quản lý sinh viên (CRUD + đọc/ghi file)
    
-  Áp dụng OOP + Collection
    

#### 📚 Resources

- _Effective Java_ — Joshua Bloch
    
- Java Brains, Baeldung Java Core
    
- VisualVM để theo dõi JVM memory
    

---

### 📅 **Tháng 2 — Spring Core & Web Layer**

#### 🎯 Mục tiêu

Hiểu cơ chế IoC, Bean lifecycle, AOP và tạo REST API chuẩn.

#### ✅ Checklist

-  IoC, Bean lifecycle, Dependency Injection
    
-  AOP & Proxy, Annotation vs XML config
    
-  Spring MVC: DispatcherServlet, Controller, Service
    
-  ExceptionHandler & Validation
    
-  Logging (SLF4J + Logback)
    
-  Unit Test (JUnit + Mockito)
    

#### 🧩 Mini Project

-  REST API CRUD “Student Service”
    
-  Validation (Hibernate Validator)
    
-  Global Exception Handler
    

#### 📚 Resources

- _Spring in Action_ — Chương 1–6
    
- Baeldung “Spring Core / Spring MVC”
    

---

### 📅 **Tháng 3 — MyBatis & Database**

#### 🎯 Mục tiêu

Hiểu cách MyBatis hoạt động, mapping SQL thủ công, và tối ưu truy vấn.

#### ✅ Checklist

-  MyBatis architecture: SqlSession, Mapper, Executor
    
-  Config XML + Mapper XML
    
-  Dynamic SQL (choose, where, foreach)
    
-  Annotation-based mapping
    
-  ResultMap, One-to-Many mapping
    
-  Transaction management trong Spring
    
-  Pagination và query optimization
    
-  SQL performance tuning (EXPLAIN, Index, Cache)
    

#### 🧩 Mini Project

-  Dự án CRUD sử dụng MyBatis + PostgreSQL
    
-  Mapper XML + Dynamic query
    
-  Transaction rollback demo
    

#### 📚 Resources

- MyBatis Official Docs
    
- MyBatis-Spring Docs
    
- Baeldung “Spring Boot + MyBatis Example”
    

---

### 📅 **Tháng 4 — Docker, CI/CD & Logging**

#### 🎯 Mục tiêu

Tự động hóa build, test, deploy và theo dõi log hệ thống.

#### ✅ Checklist

-  Docker cơ bản: Image, Container, Volume, Network
    
-  Docker Compose (Backend + DB)
    
-  CI/CD bằng GitHub Actions / GitLab CI
    
-  Build pipeline: build → test → deploy
    
-  Environment variables, secrets
    
-  Actuator health check `/actuator/health`
    
-  Centralized logging (ELK Stack hoặc Loki cơ bản)
    

#### 🧩 Mini Project

-  Dockerize project MyBatis + PostgreSQL
    
-  CI/CD pipeline build/test/deploy tự động
    
-  Logging & Monitoring cơ bản
    

#### 📚 Resources

- Docker Docs “Getting Started”
    
- GitHub Actions Docs
    
- Baeldung “Spring Boot Actuator”
    

---

### 📅 **Tháng 5 — DSA + Clean Code + Refactoring**

#### 🎯 Mục tiêu

Cải thiện tư duy giải thuật và viết code chuẩn clean, maintainable.

#### ✅ Checklist

-  Ôn cấu trúc dữ liệu: Array, List, Stack, Queue, Map, Tree
    
-  Hiểu Big-O complexity
    
-  Giải 100–150 bài Leetcode (Easy–Medium)
    
-  SOLID principles, Clean Code
    
-  Design Pattern: Factory, Strategy, Template, Singleton
    
-  Refactor project theo SOLID + thêm unit test
    
-  Static code analysis (SonarLint, Checkstyle)
    

#### 🧩 Mini Project

-  Refactor lại project MyBatis → Clean Architecture
    
-  Viết test coverage ≥70%
    
-  Optimize SQL queries
    

#### 📚 Resources

- _Clean Code_ — Robert C. Martin
    
- _Refactoring Guru_
    
- Leetcode / NeetCode
    

---

### 📅 **Tháng 6 — System Design & Project Understanding**

#### 🎯 Mục tiêu

Hiểu hệ thống thực tế, nắm được pain point và tư duy thiết kế.

#### ✅ Checklist

-  Phân tích project thật bạn đang làm:
    
    -  Kiến trúc hệ thống
        
    -  Tech stack
        
    -  Business flow
        
    -  Pain points
        
-  Học System Design cơ bản:
    
    -  Caching (Redis)
        
    -  Message Queue (RabbitMQ/Kafka overview)
        
    -  Load Balancing, Scaling
        
-  Viết tài liệu system_overview.md
    
-  Tự design hệ thống mini (User + Order microservices)
    

#### 🧩 Mini Project

-  Xây 2 microservice (user/order)
    
-  Dùng REST + Docker Compose
    
-  Viết tài liệu mô tả kiến trúc & trade-off
    

#### 📚 Resources

- System Design Primer (GitHub)
    
- ByteByteGo YouTube
    
- TechWorld with Nana (Architecture basics)