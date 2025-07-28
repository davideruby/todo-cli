// Set executable permissions for the program

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../dist/index.js');

if (!fs.existsSync(filePath)) {
  console.error(`Error: File not found at ${filePath}`);
  process.exit(1);
}

try {
  fs.chmodSync(filePath, '755');
  console.log(`Successfully set executable permissions for ${filePath}`);
} catch (error) {
  console.error(`Error setting executable permissions for ${filePath}:`, error.message);
  process.exit(1);
}