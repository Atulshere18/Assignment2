Here's a detailed README for your **Student Management System** project. It includes information on the project setup, running instructions, API endpoints, and general usage.

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

## Frontend

The frontend is built with **React** and uses **Material-UI** for the design components. It includes the following pages:

### **Login Page**:

* Users can log in with their credentials.
* JWT token is stored in `localStorage`.

### **Register Page** (Admin Only):

* Admin users can register new users with roles (admin or user).

### **Dashboard Page**:

* Display a summary and link to the student management system.

### **Student Management Page**:

* **List Students**: Displays students in a paginated list.
* **Add Student**: Admin can add new students.
* **Edit Student**: Admin can edit existing student details.
* **Delete Student**: Admin can delete students.

---

## Usage

1. **Login**:
   Navigate to the login page, enter your credentials, and get an authentication token.

2. **Register (Admin Only)**:
   Navigate to the register page and create new users.

3. **Dashboard**:
   After login, the admin or user will be redirected to the dashboard. Admins can manage students, while regular users can only view them.

4. **Student Management**:
   On the "Students" page, admins can:

   * Add a student.
   * Edit an existing student's details.
   * Delete a student.

5. **Pagination**:
   The list of students is paginated. Users can navigate between pages to view more students.

---

## Technologies

* **Frontend**: React, Axios, Material-UI
* **Backend**: Node.js, Express, JWT, MongoDB
* **Database**: MongoDB
* **Authentication**: JWT-based authentication

---

## Troubleshooting

* **CORS Issues**: If you're running the frontend and backend on different ports, you might encounter CORS issues. Ensure that you have configured CORS properly in your backend.

  ```bash
  npm install cors
  ```

  And in your backend:

  ```javascript
  const cors = require('cors');
  app.use(cors());
  ```

* **JWT Token Expiry**: If you receive an authentication error, ensure the token is valid and not expired. You may need to re-login to get a new token.

---

## Contributing

Feel free to contribute by submitting issues, suggestions, or pull requests. Please ensure to follow the project structure and add tests if you're submitting any fixes or features.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

