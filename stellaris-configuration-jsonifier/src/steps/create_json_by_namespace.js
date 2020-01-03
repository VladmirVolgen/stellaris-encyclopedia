const { processFiles } = require('../utilities/file_reader');
const { processEventFile } = require('../processors/event_parser');
const fs = require('fs');

const createJSONByNamespace = function() {
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

}



module.exports = createJSONByNamespace;