# Security Bot

A simple security bot built with Node.js that helps manage online credentials securely while checking for potential phishing threats. This bot utilizes password hashing for security and includes a basic phishing detection feature.

## Features

- **Secure Credential Storage**: Stores user credentials securely using bcrypt for password hashing.
- **Phishing Detection**: Checks URLs against a list of known phishing sites to prevent potential fraud.
- **Simple Interface**: Can be extended to have a web interface for easier user interaction.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (Node Package Manager, usually included with Node.js)

## Installation

1. **Clone the repository** or download the files:

   ```bash
   git clone <repository-url>
   cd security-bot
2. **Install the required dependencies:**
npm install
3. **(Optional) Configure Environment Variables:**
 If you have any sensitive configurations, create a .env file in the project root.

## Usage
1. **Run the Bot:**
node index.js
2. **Adding Credentials:** 
The bot will check if a URL is safe before adding credentials. Modify the urlToCheck variable in index.js to test with different URLs.

3. **Testing the Phishing Detection:**
 You can test the bot's phishing detection by using a known phishing URL in the urlToCheck variable.

## Project Structure
security-bot/
│
├── .env              # Environment variables (optional)
├── index.js          # Main bot logic
└── utils.js          # Utility functions for phishing detection

## Future Improvements
Implement a database for persistent storage of credentials.
Expand the phishing detection to fetch a more comprehensive list of known phishing sites.
Create a web interface for easier interaction with the bot.
Allow user input for adding and verifying credentials.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
