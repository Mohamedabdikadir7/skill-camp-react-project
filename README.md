# SKILL-CAMP

LMS (Learning Management System) Website

## Description

This project is a Learning Management System (LMS) website built using React and Vite. It aims to provide a seamless user experience for both students and instructors. The LMS includes features such as course management, user authentication, and progress tracking. The project uses `db.json` as the database to store and retrieve data.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/skill-camp-react-project.git
    cd skill-camp-react-project
    ```

2. **Install the dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser:**

    Navigate to `http://localhost:5173` to see the project in action.

## Usage

### Running the Application

1. **Start the JSON Server:**

    To use `db.json` as the database, start the JSON server by running the following command:

    ```bash
    npx json-server --watch db.json --port 3001
    ```

2. **Run the React Application:**

    Open another terminal window and navigate to the project directory, then start the React development server:

    ```bash
    npm run dev
    ```

### Using the Application

- **User Registration and Login:**
    - New users can register for an account.
    - Registered users can log in to access their dashboard.

- **Course Management:**
    - Instructors can create, update, and delete courses.
    - Students can enroll in courses and track their progress.

- **Progress Tracking:**
    - Students can view their course progress and complete assignments.
## Project Structure
**public/**: Contains static assets like images and fonts.
- **src/**: Contains the source code of the project.
    - **assets/**: Images, icons, and other assets.
    - **components/**: Reusable React components.
    - **App.jsx**: Main App component.
    - **index.js**: Entry point of the application.
    - **main.jsx**: Main file for rendering the React application.



