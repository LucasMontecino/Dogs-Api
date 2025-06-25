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
 https://github.com/LucasMontecino/Dogs-Api.git
 cd Dogs-Api
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
 DB_PORT=your_postgres_db_port
 DB_NAME=dogs
 PORT=3001
 API_KEY=your_dog_api_key
```
⚠️ Note: Replace your_postgres_user and your_postgres_password with your PostgreSQL credentials. 

👉 Get a free API key at <a href='https://thedogapi.com/' target='_blank' rel='noopener noreferrer'>theDogAPI.com<a/> 

### 4️⃣ Run the project
```
 // Run the backend
 cd api
 npm run dev
```

```
 // Run the frontend (in another terminal)
 cd client
 npm start
```
