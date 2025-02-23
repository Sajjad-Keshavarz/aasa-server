const express = require("express");
const fs = require("fs");
const path = require("path");
const http = require("http");

const app = express();
const port = 80;

const options = {};

// Serve the AASA file
app.get("/.well-known/apple-app-site-association", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "apple-app-site-association"));
});

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "assetlinks.json"));
});

// Start the HTTPS server
http.createServer(options, app).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
