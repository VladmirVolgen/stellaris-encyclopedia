const fs = require('fs');

const readAppConfiguration = function() {
    console.log(process.cwd());
    
    const fileContents = fs.readFileSync('./app-config.json');
    return JSON.parse(fileContents);
};

module.exports = readAppConfiguration;