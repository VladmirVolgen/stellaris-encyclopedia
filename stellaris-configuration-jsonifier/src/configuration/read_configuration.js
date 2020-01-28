const fs = require('fs');

const readAppConfiguration = function() {
    
    const fileContents = fs.readFileSync('./app-config.json');
    return JSON.parse(fileContents);
};

module.exports = readAppConfiguration;