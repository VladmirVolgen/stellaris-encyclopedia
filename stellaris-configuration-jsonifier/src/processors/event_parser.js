const { determineEventStartCharLocation, determineEventEndingCharLocation } = require('../utilities/string_value_finder');
const {Event} = require('../models/event');
const fs = require('fs');
const readAppConfiguration = require('../configuration/read_configuration')

/**
 * This method takes an event file and classifies all the events inside the file.
 * @param eventFileContents String
 * @param fileIndex int Passed down to processEvent.
 */
const processEventFile = function(eventFileContents, fileIndex) {

    let startIndex = 0;
    //let eventsList = [];
    let eventsInFileCount = 0;

    while(startIndex !== -1) {
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
        processEvent(eventContents, fileIndex, eventsInFileCount);
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
 */
const processEvent = function(eventString, fileIndex, eventsInFileCount) {

    // Read configuration
    const config = readAppConfiguration();
    const pathToJsonOutput = config.processedJsonFolder;

    const event = new Event(eventString);

    // Writes an event into a json file

    if (fileIndex === 0 && eventsInFileCount === 0) {
        fs.appendFileSync(pathToJsonOutput, `${JSON.stringify(event)}`, (err) => {
            if (err) throw err
        })
    } else {
        fs.appendFileSync(pathToJsonOutput, `,${JSON.stringify(event)}`, (err) => {
            if (err) throw err
        })
    }


};

module.exports = { processEventFile, processEvent };

