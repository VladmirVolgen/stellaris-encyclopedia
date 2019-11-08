const processFiles = require('./models/file_reader');


const eventsPath = '../../test-data-sets/events/';
const localisationPath = '../../test-data-sets/localisation/';

console.log(processFiles(eventsPath));
console.log(processFiles(localisationPath));






