# Arithmetic Calculator REST API - Frontend

## Project Description

This project is a web platform that provides basic calculator functionalities (addition, subtraction, multiplication, division, square root, and random string generation). Each functionality has a separate cost per request, and the user's balance is updated accordingly. If the user's balance is insufficient to cover the request cost, the request will be denied.

## Features

1. **Login**: User authentication with username and password.
2. **New Operation**: Form to request a new operation.
3. **User Records**: Table of user operation records with pagination, search, and record deletion.

## Tech Stack

- **Framework**: React.js
- **Design Libraries**: Bootstrap or Material Design
- **State Management**: Context API for authentication
- **HTTP Client**: Axios

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/PabloGuasco-dev/Arithmetic-Calculator-Frontend.git
   cd arithmetic-calculator-frontend

Install the dependencies:

sh
Copiar código
npm install

sh
Copiar código
npm start
The application will run on http://localhost:3001.

Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode.
npm test: Launches the test runner in interactive watch mode.
npm run build: Builds the app for production to the build folder.
npm run eject: Ejects the app from Create React App configuration (use with caution).


Usage
Login: Enter your username and password to log in.
New Operation: Use the form to perform a new operation. The result will be displayed and the cost will be deducted from your balance.
User Records: View all your past operations in a paginated table. You can search, sort, and delete records.
API Documentation
For detailed API documentation, refer to the Backend Repository.



