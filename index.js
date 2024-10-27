require('dotenv').config(); // For managing environment variables
const bcrypt = require('bcryptjs');
const fs = require('fs');
const { checkForPhishing } = require('./utils'); // Import phishing detection function

// File to store user credentials
const credentialsFile = 'credentials.json';

// Load existing credentials or initialize an empty object
let credentials = {};
if (fs.existsSync(credentialsFile)) {
    credentials = JSON.parse(fs.readFileSync(credentialsFile));
}

// Function to add a new credential
async function addCredential(service, username, password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    credentials[service] = { username, password: hashedPassword };
    fs.writeFileSync(credentialsFile, JSON.stringify(credentials));
    console.log(`Credential for ${service} added successfully.`);
}

// Function to verify a password
function verifyPassword(service, password) {
    if (!credentials[service]) {
        console.log(`No credentials found for ${service}.`);
        return;
    }
    const isMatch = bcrypt.compareSync(password, credentials[service].password);
    console.log(isMatch ? 'Password is correct!' : 'Incorrect password.');
}

// Example usage
const service = 'example.com';
const username = 'user@example.com';
const password = 'securePassword123';
// Use a safe URL for testing
const urlToCheck = 'http://safe-website.com/login'; // Update to a safe URL

(async () => {
    const isPhishing = await checkForPhishing(urlToCheck);
    if (!isPhishing) {
        await addCredential(service, username, password);
    } else {
        console.log('Credential addition skipped due to phishing warning.');
    }
    verifyPassword(service, password);
})();
