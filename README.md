# GitActivity-CLI
# GitHub Activity Fetcher

## Overview

**GitHub Activity Fetcher** is a simple command-line interface (CLI) application that allows users to fetch and display the recent activity of a specified GitHub user. It's a beginner-friendly project designed to practice working with APIs, handling JSON data, and building a CLI application.

## Features

- Fetches recent GitHub activity of a user via the GitHub API.
- Displays activities such as commits, issues, and starred repositories in the terminal.
- Handles errors gracefully, including invalid usernames or API failures.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/github-activity-fetcher.git

   	2.	Navigate to the project directory:
    cd github-activity-fetcher

    	3.	Ensure you have Node.js installed on your system.

Usage
	1.	Run the script with a GitHub username:
    node github-activity.js <GitHub-username>
    Replace <GitHub-username> with the GitHub user’s username.
API Reference

The application uses the GitHub Events API to fetch recent activities:
https://api.github.com/users/<username>/events
Project Structure
	•	github-activity.js: The main file containing the CLI logic and API interaction.

Error Handling
	•	If the username is not provided, an error message is displayed.
	•	If the API fails or the username is invalid, the application handles it gracefully and displays an appropriate error message.

Learning Objectives

This project helps you:
	•	Understand how to interact with REST APIs.
	•	Work with JSON data in Node.js.
	•	Build a command-line interface application.
	•	Handle errors effectively.

Future Enhancements
	•	Add filtering options for activity types (e.g., only commits, issues, or stars).
	•	Display activities in a more structured and readable format.
	•	Cache results to improve performance for repeated queries.
