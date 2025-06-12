# 🐶 Dogs Api Encyclopedia
Discover, explore, and create dog breeds! A full-stack web application built with React, Redux, Node.js, Express, and PostgreSQL.

## ✨ Features
- 🔎 Search for dog breeds by name

- 🗂️ Filter by temperaments or source (API / User-created)

- 🔀 Sort alphabetically or by weight

- ➕ Create new dog breeds with controlled form

- 📄 Detail view for each breed with full info

- 📃 Paginated breed list (8 per page)

- 🎨 Custom CSS or CSS Modules for styling

- ⚙️ Full CRUD with PostgreSQL database

## ⚙️ Tech Stack
### Frontend
- ⚛️ React

- 🔄 Redux

- 🌐 React Router

- 🎨 CSS / CSS Modules

### Backend
- 🖥️ Node.js

- 🚂 Express

- 🗄️ PostgreSQL

- 🛠️ Sequelize

## 🚀 Installation
### 1️⃣ Clone the repository
```
 git clone https://github.com/your-username/henry-dogs.git
 cd henry-dogs
```
### 2️⃣ Install dependencies
```
 // Install backend dependencies
 cd api
 npm install
```

```
 // Install frontend dependencies
 cd ../client
 npm install
```

### 3️⃣ Setup environment variables
In the /api directory, create a .env file:
```
 DB_USER=your_postgres_user
 DB_PASSWORD=your_postgres_password
 DB_HOST=localhost
 DB_NAME=dogs
 API_KEY=your_dog_api_key
```
⚠️ Note: Replace your_postgres_user and your_postgres_password with your PostgreSQL credentials.
👉 Get a free API key at theDogAPI.com

### 4️⃣ Run the project
```
 // Run the backend
 cd api
 npm start
```

```
 // Run the frontend (in another terminal)
 cd client
 npm start
```
