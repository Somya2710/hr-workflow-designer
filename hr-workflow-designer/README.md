# 🚀 HR Workflow Designer

A modern, interactive web application that enables HR teams to visually design, configure, and simulate workflows such as onboarding, approvals, and automated processes using a drag-and-drop interface.

---

## 🎯 Project Overview

The **HR Workflow Designer** allows users to:

* 🧩 Build workflows using a drag-and-drop canvas
* 🔗 Connect nodes to define process flow
* 📝 Configure each step using dynamic forms
* ⚙️ Integrate automated actions via mock APIs
* 🧪 Simulate workflows and view execution steps

This project focuses on **frontend architecture, scalability, and interactive UI design**.

---

## 🛠️ Tech Stack Used

* **Framework:** React (Vite / Next.js)
* **Flow Engine:** React Flow
* **Language:** TypeScript / JavaScript
* **Styling:** Tailwind CSS / CSS
* **State Management:** React Hooks / Context API
* **API:** Mock API (JSON Server / MSW)

---

## 🏗️ Architecture

The application is designed using a **modular and scalable structure**:

* 📦 **Components Layer**

  * Reusable UI components (Sidebar, Canvas, Panels)

* 🔄 **Workflow Engine**

  * Manages nodes and edges using React Flow

* 🧠 **State Management**

  * Centralized workflow state using hooks/context

* 📝 **Dynamic Form System**

  * Node-based configurable forms

* 🔌 **API Layer**

  * Abstracted services for automation and simulation

* 🧰 **Utilities**

  * Workflow validation and serialization

---

## ▶️ How to Run

```bash
git clone https://github.com/your-username/hr-workflow-designer.git
cd hr-workflow-designer
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🎨 Features

* ✅ Drag-and-drop workflow canvas
* ✅ Multiple custom node types
* ✅ Node editing with dynamic forms
* ✅ Edge connections between nodes
* ✅ Mock API integration
* ✅ Workflow simulation panel

---

## 🎯 Design Decisions

* ⚡ **React Flow** for efficient node-based UI
* 🧱 **Component-based design** for scalability
* 🔄 **Dynamic forms** for flexibility across node types
* 🔌 **Mock APIs** to simulate real-world backend interaction
* 🧩 **Separation of concerns** for maintainability

---

## ✅ What Has Been Completed

* Workflow canvas with drag-and-drop support
* Custom nodes (Start, Task, Approval, Automated, End)
* Node configuration panel
* Mock API integration
* Workflow simulation with step-by-step output
* Basic validation for workflow structure

---

## 🚧 What I Would Add With More Time

* 🔁 Undo/Redo functionality
* 📤 Export/Import workflow as JSON
* 🗺️ Mini-map and zoom controls
* ⚠️ Advanced validation with visual error indicators
* 🤖 Auto-layout for nodes
* 💾 Backend integration for persistence
* 🎨 Enhanced UI/UX and animations

---

