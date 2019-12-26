const {processFiles} = require('./utilities/file_reader');
const { processEventFile } = require('./processors/event_parser');
const fs = require('fs');
const readAppConfiguration = require('./configuration/read_configuration')


const eventsPath = '../test-data-sets/events/';



//Read config
const config = readAppConfiguration();
const pathToJsonOutput = config.processedJsonFolder;

const eventFiles = processFiles(eventsPath);

fs.writeFileSync(pathToJsonOutput, `[`, (err) => {
    if (err) throw err
});

for (let index = 0; index < eventFiles.length; index++) {
    processEventFile(eventFiles[index], index);
}

fs.appendFileSync(pathToJsonOutput, `]`, (err) => {
    if (err) throw err
});














