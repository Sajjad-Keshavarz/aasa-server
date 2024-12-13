# Companion Server for the react-native-passkeys repository

This is a simple server that can be used to store and retrieve passkeys for the react-native-passkeys repository. It is a simple Node.js server that uses Express.js to handle requests.

It can server the aasa file for the react-native-passkeys ios app and the assetslinks.json file for the android app.

You need to add:

1. Your apple team id in the aasa file
2. You android sha256 fingerprint in the assetslinks.json file

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server
