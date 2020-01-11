const { processFiles } = require('../utilities/file_reader');
const createJSONByNamespace = require('../steps/create_json_by_namespace');

const stellarisParserJob = function(config) {  
    
    const pathToJsonOutput = config.processedJsonFolder;
    const eventsPath = config.pathToStellarisEventFiles;
    
    const eventFiles = processFiles(eventsPath);

    // TODO: Step1, create and write all jsons   
    createJSONByNamespace(eventFiles);

    // TODO: Step2, add localisation to jsons 
    // (2 options, either insert into non-relational database or create new json for each language)
    // a third option could be a relational db with two tables (event_json(version, filename, content) 
    // and localisation_data(language PK, entry PK, content ))
    
}

module.exports = stellarisParserJob;