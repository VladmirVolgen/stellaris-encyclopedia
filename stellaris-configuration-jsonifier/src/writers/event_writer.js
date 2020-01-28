const { determineEventStartCharLocation, determineEventEndingCharLocation } = require('../utilities/string_value_finder');
const processStellarisEvent = require('../processors/stellaris_event_processor');
const fs = require('fs');
const readAppConfiguration = require('../configuration/read_configuration');
const { readFile } = require('../utilities/file_reader');

// TODO: Do writeAllEvents

/**
 * This method takes an event file and classifies all the events inside the file.
 * @param {Array<String>} filesAssigned the files assigned to the event 
 * @param {Number} fileIndex  Passed down to processEvent.
 * @param {String} filePath The path to the file to be written. 
 */
const writeEventFile = function (eventFileContents, fileIndex, filePath) {
    
    let startIndex = 0;

    let eventsInFileCount = 0;

    while (startIndex !== -1) {
        startIndex = determineEventStartCharLocation(eventFileContents);
        // determine if there are results
        if (startIndex === -1) break;

        // Make file smaller
        eventFileContents = eventFileContents.slice(startIndex);
        // Get ending char
        const endingChar = determineEventEndingCharLocation(eventFileContents);

        // push event to list
        const eventContents = eventFileContents.slice(0, endingChar);

        // call processor and write into output json
        writeEvent(eventContents, fileIndex, eventsInFileCount, filePath);
        eventsInFileCount++;

        console.log(`Events processed in the file: ${eventsInFileCount}`);

        // Remove event from the remaining file to process
        eventFileContents = eventFileContents.slice(endingChar);
    }


};

/**
 * This method process an event and writes it into a file
 * @param eventString
 * @param fileIndex it is used to see if it is the first file being processed.
 * @param eventsInFileCount a counter for the number of events processed int the file.
 * It is used to determine if the json object will need a ',' before.
 * @param filePath the path to the file that is going to be written
 */
const writeEvent = function (eventString, fileIndex, eventsInFileCount, filePath) {

    const event = processStellarisEvent(eventString, readAppConfiguration());

    // Writes an event into a json file
    if (fileIndex === 0 && eventsInFileCount === 0) {

        fs.appendFileSync(filePath, event, (err) => {
            if (err) throw err
        })
    } else {
        fs.appendFileSync(filePath, `,${event}`, (err) => {
            if (err) throw err
        })
    }


};

module.exports = { writeEventFile, writeEvent };

