# Movies Homepage Project

## Introduction

This project is a Movies Homepage application built with a React frontend and a Node.js backend. The backend uses MongoDB for the database.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Database Setup](#database-setup)
- [Running the Backend](#running-the-backend)
- [Running the Frontend](#running-the-frontend)
- [Testing All Flows](#testing-all-flows)
- [Repository Structure](#repository-structure)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Database Setup

To set up the database, follow these steps:

1. Ensure MongoDB is installed and running on your machine.
2. Ensure MongoDB is accessible at `mongodb://localhost:27017/imdb_clone`.
3. No additional steps are required as the backend is configured to connect to this database automatically.

## Running the Backend

To build and run the backend locally, follow these steps:

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3.Start the backend server:

    node index.js

## Running the `Frontend`

To build and run the frontend locally, follow these steps:

1.Navigate to the frontend directory:

```sh
cd frontend
```

2.Install the dependencies:

```sh
npm install
```

3.Start the frontend development server:

```sh
npm start
```

Testing All Flows
To test the application:

Open your web browser and navigate to http://localhost:3001 or your default port.
Verify that the Movies Homepage is displayed.
Click on a movie card to see its details.
Ensure that the backend and frontend are working together seamlessly.
