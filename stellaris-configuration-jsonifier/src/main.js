const processFiles = require('./models/file_reader');
const { processEventFile, processEvent } = require('./models/event_parser');


const eventsPath = '../../test-data-sets/events/';
const localisationPath = '../../test-data-sets/localisation/';

const eventFiles = processFiles(eventsPath);





const eventsFromFile = processEventFile(eventFiles[1]);

processEvent(eventsFromFile[0]);
processEvent(eventsFromFile[1]);











