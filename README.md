# Employee Management System

## 📌 Project Overview

The **Employee Management System** is a full-stack web application designed to manage employee information efficiently. The application allows users to perform essential employee management operations such as adding, viewing, updating, deleting, and filtering employee records.

This project demonstrates the integration of a modern frontend application with a backend REST API and a relational database.

---

## 🚀 Features

* ➕ Add new employee details
* 👀 View all employee records
* ✏️ Edit and update employee information
* 🗑️ Delete employee records
* 🔍 Filter employee records
* 📊 Manage employee data efficiently
* 🔗 REST API integration between frontend and backend
* 🗄️ Persistent data storage using PostgreSQL
* 📱 Simple and user-friendly interface

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios / Fetch API

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* PostgreSQL

### Tools

* Visual Studio Code
* Git
* GitHub
* Postman
* pgAdmin

---

## 🏗️ Project Architecture

The application follows a full-stack client-server architecture:

```text
React Frontend
      │
      │ HTTP Requests
      ▼
Node.js + Express.js Backend
      │
      │ SQL Queries
      ▼
PostgreSQL Database
```

### Workflow

1. The user interacts with the Employee Management System through the React frontend.
2. The frontend sends HTTP requests to the Node.js and Express.js backend.
3. The backend processes the request and communicates with the PostgreSQL database.
4. PostgreSQL stores and retrieves employee information.
5. The backend sends the response back to the frontend.
6. The frontend displays the updated employee information to the user.

---

## 📂 Project Structure

```text
employee-management-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── main.jsx
│   │   └── ...
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── database/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure the following software is installed:

* Node.js
* npm
* PostgreSQL
* pgAdmin (Optional)
* Visual Studio Code

---

## 1️⃣ Clone the Repository

```bash
git clone <your-github-repository-url>
```

Navigate to the project folder:

```bash
cd employee-management-system
```

---

## 2️⃣ Setup the PostgreSQL Database

Create a PostgreSQL database for the project.

Example:

```sql
CREATE DATABASE employee_management;
```

Create the required employee table according to the project database structure.

Configure the PostgreSQL database connection details in the backend.

---

## 3️⃣ Run the Backend

Navigate to the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

The backend server will run on the configured port.

---

## 4️⃣ Run the Frontend

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Open the application in your browser using the local URL displayed in the terminal.

---

## 🔌 API Operations

The backend provides REST APIs to perform CRUD operations.

### ➕ Create Employee

Used to add a new employee to the database.

```text
POST /employees
```

### 👀 Get Employees

Used to retrieve employee records.

```text
GET /employees
```

### ✏️ Update Employee

Used to update existing employee information.

```text
PUT /employees/:id
```

### 🗑️ Delete Employee

Used to remove an employee record.

```text
DELETE /employees/:id
```

---

## 🔄 CRUD Operations

The Employee Management System performs the following CRUD operations:

### Create

Users can add new employee information to the system.

### Read

Users can view all available employee records.

### Update

Users can edit and update existing employee information.

### Delete

Users can delete employee records from the system.

---

## 🔍 Employee Filtering

The application includes a filtering feature that allows users to search and filter employee records easily.

This helps users quickly find employee information without manually checking every record.

---

## 🎯 Project Workflow

### Step 1: Start the Application

The frontend and backend servers are started separately.

### Step 2: User Interaction

The user enters employee information through the React frontend.

### Step 3: API Request

The frontend sends requests to the Express.js backend.

### Step 4: Backend Processing

The backend validates and processes the employee information.

### Step 5: Database Operation

The backend performs operations on the PostgreSQL database.

### Step 6: Response

The backend sends the response back to the frontend.

### Step 7: UI Update

The React application updates the user interface with the latest employee data.

---

## 📸 Application Features Demonstrated

The project demonstrates:

* Adding employee details
* Viewing employee records
* Editing employee details
* Deleting employee records
* Filtering employee information
* Frontend and backend integration
* REST API communication
* PostgreSQL database operations

---

## 🎥 Project Demonstration

The project demonstration includes the following:

### 1. Project Setup

* Locating and opening the project in Visual Studio Code
* Starting the frontend application
* Starting the backend server

### 2. Adding Employee Details

* Opening the application in Google Chrome
* Entering employee information
* Adding employee details to the system

### 3. Employee Management Operations

* Editing employee details
* Deleting employee records
* Filtering employee information

---

## 🧠 Learning Outcomes

Through this project, I gained practical experience in:

* Building a full-stack web application
* React.js frontend development
* Node.js and Express.js backend development
* Creating and consuming REST APIs
* PostgreSQL database integration
* Performing CRUD operations
* Connecting frontend and backend applications
* Managing application data
* Using Git and GitHub for version control

---

## 🔮 Future Enhancements

Possible future improvements include:

* User authentication and authorization
* Admin dashboard
* Employee profile pages
* Pagination
* Advanced search functionality
* Input validation
* Error handling improvements
* Role-based access control
* Deployment using cloud platforms

---

## 👩‍💻 Author

**Dhana Lakshmi Marda**

Java Full Stack Developer

### Technical Skills

* Java
* JavaScript
* React.js
* Node.js
* Express.js
* PostgreSQL
* Spring Boot
* REST APIs
* HTML
* CSS
* Git
* GitHub

---

## ⭐ Conclusion

The **Employee Management System** is a full-stack CRUD application developed to simplify employee data management. The project demonstrates how a React.js frontend communicates with a Node.js and Express.js backend, while PostgreSQL is used for storing and managing employee data.

The application provides an efficient way to add, view, update, delete, and filter employee records while demonstrating important full-stack development concepts such as REST APIs, database integration, CRUD operations, and frontend-backend communication.

