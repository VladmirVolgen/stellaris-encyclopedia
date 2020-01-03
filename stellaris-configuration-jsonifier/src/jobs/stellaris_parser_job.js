const { processFiles } = require('../utilities/file_reader');
const { processEventFile } = require('../processors/event_parser');
const fs = require('fs');
const readAppConfiguration = require('../configuration/read_configuration');

const stellarisParserJob = function(config) {  
    
    const pathToJsonOutput = config.processedJsonFolder;
    const eventsPath = config.pathToStellarisEventFiles;
    
    const eventFiles = processFiles(eventsPath);

    // TODO: read all namespaces and return a object with 
    // namespaces and files assigned
    /** 
    {
        namespaceName: [file1, file2]
    }
    */

     // TODO: Step1, create and write all jsons   
    
    // Writes start array to file
    // TODO: instead of pathToJsonOutput the filename will be 
    // determined by namespace
    fs.writeFileSync(pathToJsonOutput, `[`, (err) => {
        if (err) throw err
    });
    
    // 
    for (let index = 0; index < eventFiles.length; index++) {
        processEventFile(eventFiles[index], index);
    }

    // Writes end array to file
    fs.appendFileSync(pathToJsonOutput, `]`, (err) => {
        if (err) throw err
    });

    // end of step1

    // TODO: Step2, add localisation to jsons 
    // (2 options, either insert into non-relational database or create new json for each language)
    
}

module.exports = stellarisParser;