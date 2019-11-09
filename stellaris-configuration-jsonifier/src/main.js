const processFiles = require('./models/file_reader');
const processEventFile = require('./models/event_parser');


const eventsPath = '../../test-data-sets/events/';
const localisationPath = '../../test-data-sets/localisation/';

const eventFiles = processFiles(eventsPath);



console.log(processEventFile(eventFiles[0], 0, []));








