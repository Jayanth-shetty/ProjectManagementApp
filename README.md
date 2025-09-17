# ProjectManagementApp

A React-based project management application that allows users to create, view, and manage projects with tasks. The app is built using **React + Vite** and styled with **Tailwind CSS**.

---

## 📂 Project Structure

```
ProjectManagementApp/
│
├── public/               # Static assets
│   └── logo.png
│
├── src/                  # Application source code
│   ├── Components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── NewProject.jsx
│   │   ├── NoProjectSelected.jsx
│   │   ├── ProjectSideBar.jsx
│   │   └── SelectedProjects.jsx
│   │
│   ├── Tasks/            # Task-related components
│   │   ├── NewTask.jsx
│   │   └── Task.jsx
│   │
│   ├── assets/           # Images and icons
│   │   └── no-projects.png
│   │
│   ├── App.jsx           # Root component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
│
├── .gitignore
├── index.html            # Main HTML file
├── package.json          # Project dependencies
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Jayanth-shetty/ProjectManagementApp.git
cd ProjectManagementApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

This will start the app on [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

---

## 🛠️ Tech Stack

* **React** (with Vite)
* **Tailwind CSS** for styling
* **JavaScript (ES6+)**

---

## 🚀 Features

* Add and manage projects
* Add tasks under projects
* Modal-based UI interactions
* Responsive design with Tailwind

---

## 📜 License

This project is licensed under the MIT License.
