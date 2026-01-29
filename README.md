

🗂️ TaskMate

TaskMate is a clean, modern, and lightweight task & project management web application built with React and Vite. It is designed as a frontend-focused productivity tool that demonstrates intuitive UI/UX patterns, state management, and client-side data persistence using the browser’s localStorage.

The project is ideal for learning purposes, portfolio showcases, UI prototyping, or as a foundation for building a full-stack task management system.


---

✨ Features

✅ Task Management

Create, edit, and delete tasks

Mark tasks as To Do, In Progress, or Completed

Set task priorities

Assign due dates

Update task details in real time


📁 Project Organization

Group tasks under different projects

Easily switch between projects

Maintain clear separation of work streams


💾 Local Data Persistence

Tasks and projects are stored in browser localStorage

Data persists across page reloads

No external database or backend required


🎨 Modern UI/UX

Clean and minimal design

Responsive layout for different screen sizes

Intuitive navigation and task flow

Fast load time using Vite



---

🧰 Tech Stack

Technology	Purpose

React	UI development
Vite	Fast build and development server
React Router	Client-side routing
JavaScript (ES6+)	Application logic
CSS	Styling and layout
LocalStorage API	Client-side data persistence



---

📂 Project Structure

taskmate/
├── public/                     # Static assets
│
├── src/
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Page-level components
│   ├── routes/                 # Application routing
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Helper functions (localStorage, etc.)
│   │
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
│
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation

---

🚀 Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)

npm or yarn



---

Installation

1. Clone the repository



git clone https://github.com/scarrxt/taskmate.git

2. Navigate into the project directory



cd taskmate

3. Install dependencies



npm install

4. Start the development server



npm run dev

5. Open in browser



http://localhost:5173


---

🧪 Available Scripts

Command	Description

npm run dev	Starts the development server
npm run build	Builds the app for production
npm run preview	Previews the production build



---

⚠️ Limitations

This project is intentionally frontend-only.

❌ No backend or API

❌ No authentication or user accounts

❌ No cloud database or syncing

❌ Data is browser-specific (localStorage)


These limitations make TaskMate fast, simple, and easy to extend.


---

🛠️ Possible Enhancements

Future improvements you can add:

Backend integration (Node.js, Firebase, Supabase, etc.)

User authentication (JWT / OAuth)

Cloud database storage

Task reminders & notifications

Drag-and-drop task reordering

Team collaboration features

Dark mode support



---

🎯 Use Cases

Frontend portfolio project

React/Vite learning project

UI/UX prototyping

Base template for a SaaS task manager

Demo app for interviews or presentations



---

🤝 Contributing

Contributions are welcome.

1. Fork the repository


2. Create a new feature branch


3. Commit your changes


4. Open a pull request



Please ensure your code follows clean React practices and is well documented.


---

📄 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.


