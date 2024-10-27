const axios = require('axios');

// List of known phishing URLs (for demonstration purposes)
const phishingUrls = [
    'malicious-website.com',
    'phishing-site.com',
];

// Function to check if a URL is potentially a phishing link
async function checkForPhishing(url) {
    for (let phishingUrl of phishingUrls) {
        if (url.includes(phishingUrl)) {
            console.log(`Warning: The URL ${url} is known for phishing!`);
            return true;
        }
    }
    console.log(`The URL ${url} appears safe.`);
    return false;
}

module.exports = { checkForPhishing }; // Export the function for use in index.js
