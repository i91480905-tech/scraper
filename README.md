# Local Business Scraper - Full Stack Edition

This project is a high-performance, real-time business information scraper featuring a React frontend and a Python (Flask) backend scraping engine. It requires no external API keys to function.

## How It Works

This is a full-stack application with a client-server architecture:
1.  **Frontend (React):** A modern user interface built with React and Tailwind CSS that captures user search queries.
2.  **Backend (Python/Flask):** A lightweight local server that receives requests from the frontend, performs a live scrape of Google Maps data using powerful Python libraries, and returns the structured data.

This architecture bypasses browser security limitations (like CORS) and allows for robust, real-time scraping.

## Setup and Installation

### Prerequisites

-   **Node.js & npm:** For running the React frontend.
-   **Python 3:** For running the backend scraping engine. You can download it from [python.org](https://www.python.org/downloads/).

### Step 1: Install Python Dependencies

Open your terminal or command prompt and run the following command to install the necessary Python libraries for the backend server:

```bash
pip install Flask Flask-Cors google-search-results
```

### Step 2: Start the Backend Scraping Server

In your terminal, navigate to the project's root directory and run the following command:

```bash
python scraper_server.py
```

You should see output indicating the server is running on `http://127.0.0.1:5000`.

**IMPORTANT:** Leave this terminal window open. This is your scraping engine.

### Step 3: Run the Frontend Application

Open a **new** terminal window. Navigate to the project's root directory.

The frontend is set up to run directly from the `index.html` file using modern browser features. Simply open `index.html` in your web browser. It will automatically connect to your local backend server.

Now you can use the application to perform live scrapes without any API keys!
