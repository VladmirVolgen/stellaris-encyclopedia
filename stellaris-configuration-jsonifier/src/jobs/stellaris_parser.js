const { processFiles } = require('../utilities/file_reader');
const { processEventFile } = require('../processors/event_parser');
const fs = require('fs');
const readAppConfiguration = require('../configuration/read_configuration');

const stellarisParser = function(config) {  
    
    const pathToJsonOutput = config.processedJsonFolder;
    const eventsPath = config.pathToStellarisEventFiles;
    
    const eventFiles = processFiles(eventsPath);
    
    // Writes start array to file
    fs.writeFileSync(pathToJsonOutput, `[`, (err) => {
        if (err) throw err
    });
    
    // TODO: Step1, create all jsons
    for (let index = 0; index < eventFiles.length; index++) {
        processEventFile(eventFiles[index], index);
    }

    // TODO: Step2, add localisation to jsons 
    // (2 options, either insert into non-relational database or create new json for each language)
    
    // Writes end array to file
    fs.appendFileSync(pathToJsonOutput, `]`, (err) => {
        if (err) throw err
    });
}

module.exports = stellarisParser;