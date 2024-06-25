
## Description

This project implements CRUD operations for managing users via RESTful APIs using PHP for the backend and Vite for the frontend.

## Installation

1. **Backend Setup**
   - Clone the repository.
   - Run `composer install` to install PHP dependencies.
   - Configure `config.php` and `env.php` as per your environment.

2. **Frontend Setup**
   - Navigate to the `frontend/` directory.
   - Run `npm install` to install frontend dependencies.
   - Customize `vite.config.js` if needed for your development environment.

## Backend APIs

- **Create User**: POST request to `/api/v1/user`
- **Get All Users**: GET request to `/api/v1/user`
- **Update User**: PATCH request to `/api/v1/user`
- **Delete User**: DELETE request to `/api/v1/user`

API endpoints are located in the `api/` directory, with corresponding controllers in `controllers/`.

## Frontend Features

- **List Users**: Display a list of users fetched from the backend.
- **Add User**: Form to create a new user.
- **Update User**: Form to edit existing user details.
- **Delete User**: Button to delete a user from the list.

Frontend files are located in the `frontend/` directory, leveraging Vite for fast development and hot module replacement.

## Usage

### Backend

- Ensure your local server environment (e.g., XAMPP, WAMP) is running.
- Point your web server to the `public_html/` directory as the document root.
- Access the API endpoints via your localhost URL.

### Frontend

- Navigate to the `frontend/` directory.
- Run `npm run dev` to start the Vite development server.
- Access the frontend application via `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow the standard GitHub flow (fork, branch, pull request) and adhere to code style guidelines.