#javacore #interview  

# 1. Overview 
## 1.1 What is JVM 
 - Use for run java program 
 - It provides a runtime environment that allows Java programs to run on any platform without recompilation 

## 1.2 JDK, JRE and JVM 
![[Pasted image 20251021214231.png]]
### JVM : A virtual machine that executes Java bytecode. Convert bytecode into machine code, manage memory, performs garbage collection and optimize runtime performance 
-> JVM is the runtime engine that make Java programs executable 

JRE : The runtime environment that includes the `JVM` and core libraries. Provides everything needed to run Java applications, but not to develop them. 

JDK : A full-featured development kit that includes the JRE, compiler (`javac`), and other development tools.
```
JDK = JRE + Development Tools
JRE = JVM + Libraries
```
## 1.3 How JVM work internally
![[JVM Architecture-2.png]]

# 2. JVM internal component 
## 2.1 Class Loader Subsystem
The **Class Loader Subsystem** is responsible for loading `.class` files (bytecode) into memory when needed.  
JVM loads classes **lazily**, meaning they are loaded only when first referenced.

---

### 📜 States of Class Loading

#### 1️⃣ Loading

- JVM locates and reads the `.class` file (from **JARs**, **directories**, or **network**).
    
- A **Class object** is created in the **Method Area** for each loaded class.
    

---

#### 2️⃣ Linking

Includes three sub-phases:

- **Verification** → Ensures the bytecode is valid, safe, and does not break JVM security.
    
- **Preparation** → Allocates memory for **static variables** and assigns **default values** (`0`, `null`, `false`, …).
    
- **Resolution** → Converts symbolic references (names of classes, methods, fields) into **direct references** in memory.
    



#### 3️⃣ Initialization

- Assigns real values to **static variables**.
    
- Executes **static blocks** of the class.
    
- ✅ This is the **final step** before a class becomes usable.
## 2.2 Class (Method) Area 
 - Include meta data of the class (fields,method,constructores,...)
 - Methods 's bytecode 
 - Run time constant Pool 
 - Inheritance's information
 -> In Java 8+, Method Area stored inside Metaspace (in native memory) -> no fixed limit 
## 2.3 Heap Structure 
- Stores objects and instance variables 
- Managed by Garbae Collector 
- Divided into :
`Young Generation
    ├─ Eden Space (new objects)
    ├─ Survivor Space (S0, S1)
Old Generation
`
-> Objects survive several GC cycles → promoted to **Old Gen**
## 2.4. Stack Area 
- Each thread has its own stack 
- Stores :
	- Method calls (stack frames)
	- Local variables
	- Reference pointers
- Lifespan = method life cycle 
## 2.5 PC Register
- Stores the address of next executing instruction 
- Each thread has its own PC Register
## 2.6 Native Method Stack 
- Supports execution of native code (C/C++ via JNI)
- 


# 3. JVM Memory Management & Garbage Collection 
 ## 3.1 Heap Structure 
 ![[assets/JVM Architecture-1.png]]
### Young Gen GC (Minor GC)
- Fast && frequent 
- Clean objects short lived
### Old Gen GC (Major GC)
- Slow, expenstive -> has Stop-The-World 
- Remove long life object 

# 4. JIT Compiler
- Bytecode run by Interpreter -> fast to start up
- Method always call -> JIT compile into machine code 
- Optimization techniques : 
	- Inline Methods
	- Escap analysis 
	- Dead code elimination 

