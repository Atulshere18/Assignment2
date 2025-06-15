
---

# Student Management System

## Overview

This **Student Management System** is a full-stack application built using **React** for the frontend, **Express.js** for the backend, and **MongoDB** for the database. The application allows administrators to perform CRUD operations (Create, Read, Update, Delete) on students and provides role-based access to different parts of the system.

## Features

* **Role-based Access**: Admin users can perform all CRUD operations on students, while regular users can only view the student list.
* **Student Management**: Add, edit, delete, and list students with pagination.
* **Responsive UI**: Built using **Material-UI** for an easy-to-use and responsive interface.
* **Authentication**: JWT-based authentication and role authorization.
* **Pagination**: Students are displayed with pagination to efficiently handle large datasets.

## Tech Stack

* **Frontend**: React, Material-UI, Axios
* **Backend**: Node.js, Express, JWT Authentication
* **Database**: MongoDB
* **Middleware**: JWT Authentication & Role-based Authorization

## Prerequisites

Before running the project, make sure you have the following installed:

* **Node.js** (Recommended version: >=14.x)
* **MongoDB** (Running locally or using MongoDB Atlas)
* **Postman or any API testing tool** (optional, for testing API endpoints)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
```

### 2. Install Backend Dependencies

Navigate to the `backend` directory and install the required dependencies.

```bash
cd backend
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_for_jwt
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., from MongoDB Atlas), and set a secret key for JWT authentication.

### 4. Install Frontend Dependencies

Navigate to the `frontend` directory and install the required dependencies.

```bash
cd frontend
npm install
```

### 5. Run the Application

#### Backend:

To start the backend server, navigate to the `backend` folder and run:

```bash
cd backend
npm start
```

This will start the server on `http://localhost:5000`.

#### Frontend:

To start the frontend, navigate to the `frontend` folder and run:

```bash
cd frontend
npm start
```

This will open the React application in your default browser at `http://localhost:3000`.

---

## API Endpoints

The backend exposes the following API endpoints:

### **Authentication**

* **POST** `/api/auth/login`

  * **Request Body**: `{ username: String, password: String }`
  * **Response**: `{ token: String }`
  * **Description**: Log in a user and receive a JWT token.

* **POST** `/api/auth/register`

  * **Request Body**: `{ username: String, password: String, role: String }`
  * **Response**: `{ message: String }`
  * **Description**: Register a new user (only accessible by admins).

### **Student CRUD Operations**

* **GET** `/api/students`

  * **Request Query Parameters**: `page` (default: 1), `limit` (default: 10)
  * **Response**:

    ```json
    {
      "students": [ { _id: String, name: String, age: Number, grade: String }, ... ],
      "totalStudents": Number,
      "totalPages": Number,
      "currentPage": Number
    }
    ```
  * **Description**: Fetch a list of students with pagination.

* **POST** `/api/students`

  * **Request Body**: `{ name: String, age: Number, grade: String }`
  * **Response**: `{ _id: String, name: String, age: Number, grade: String }`
  * **Description**: Create a new student (admin only).

* **PUT** `/api/students/:id`

  * **Request Body**: `{ name: String, age: Number, grade: String }`
  * **Response**: `{ _id: String, name: String, age: Number, grade: String }`
  * **Description**: Update a student's information by ID (admin only).

* **DELETE** `/api/students/:id`

  * **Response**: `{ message: String }`
  * **Description**: Delete a student by ID (admin only).

---

