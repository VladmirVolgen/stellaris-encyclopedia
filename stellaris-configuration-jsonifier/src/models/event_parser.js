const { determineEventStartCharLocation, determineEventEndingCharLocation } = require('../utilities/event_brackets_finder');
const {Event} = require('./event');

/**
 * This method takes an event file and classifies all the events inside the file.
 * @param eventFileContents String
 * @returns {[]} Array of events
 */
const processEventFile = function(eventFileContents) {

    let startIndex = 0;
    let eventsList = [];

    while(startIndex !== -1) {
        startIndex = determineEventStartCharLocation(eventFileContents);
        // determine if there are results
        if (startIndex === -1) break;

        // Make file smaller
        eventFileContents = eventFileContents.slice(startIndex);
        // Get ending char
        const endingChar = determineEventEndingCharLocation(eventFileContents);

        //TODO: process file here

        // push event to list
        const eventContents = eventFileContents.slice(0, endingChar);
        eventsList.push(eventContents);
        console.log(`Events processed: ${eventsList.length}`);

        // Remove event from the remaining file to process
        eventFileContents = eventFileContents.slice(endingChar);
    }

    return eventsList;


};

/**
 * This method process an event and writes it into a file
 * @param eventString
 * @param pathToJson The path to the json file that needs to be written into.
 */
const processEvent = function(eventString, pathToJson) {

    const event = new Event(eventString);

    console.log(`This is the title for the event: ${event.title}`);
    console.log(`This is the picture for the event: ${event.picture}`);
    console.log(`This are the options for the event: -length: ${event.options.length} -arrayContent: ${event.options}`);

    //TODO: writes event into a json file
};

module.exports = { processEventFile, processEvent };

