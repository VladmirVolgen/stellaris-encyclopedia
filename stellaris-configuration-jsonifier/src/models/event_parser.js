/**
 * This method takes an event file and classifies all the events inside the file.
 * @param eventFileContents String
 * @returns {[]} Array of events
 */
const processEventFile = (eventFileContents) => {

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
const processEvent = (eventString, pathToJson) => {
    // TODO: Need a class to hold all the event keys and do the logic
    // TODO: All the gets can be simplified using a helper function.

    // Get id key
    const idKey = 'id =';
    const idStartIndex = eventString.indexOf(idKey) + idKey.length;
    const idEndIndex = eventString.indexOf(`\n`, idStartIndex);
    const id = eventString.slice(idStartIndex, idEndIndex).trim();

    console.log(`This is the id for the event: ${id}`);

    // Get title key

    const titleKey = 'title =';
    const titleStartIndex = eventString.indexOf(titleKey) + titleKey.length;
    const titleEndIndex = eventString.indexOf(`\n`, titleStartIndex);
    const title = eventString.slice(titleStartIndex, titleEndIndex).trim();
    console.log(`This is the title for the event: ${title}`);

    //GET desc
    // if desc is an object we might want to do some more processing.
    const descObjectKey = 'desc = {'
    const descStringKey = 'desc ='

    let desc = null;

    if (eventString.indexOf(descObjectKey) !== -1) {

        const descStartIndex = eventString.indexOf(descObjectKey) + descObjectKey.length;
        const descEndIndex = determineEventEndingCharLocation(eventString.slice(descStartIndex)) + descStartIndex;
        desc = eventString.slice(descStartIndex, descEndIndex);

    } else {

        const descStartIndex = eventString.indexOf(descStringKey) + descStringKey.length;
        const descEndIndex = eventString.indexOf(`\n`, descStartIndex);
        desc = eventString.slice(descStartIndex, descEndIndex);

    }

    console.log(`This is the description for the event: ${desc}`);

    //TODO: writes event into a json file
};

const determineEventStartCharLocation = (eventRemainingString) => {
    return eventRemainingString.search('{');
};

/**
 * This function finds the ending bracket given a string where the beginning bracket has been found
 * @param slicedEventString
 * @returns {number}, ending bracket index
 */
const determineEventEndingCharLocation = (slicedEventString) => {
    let bracketsCounter = 1;
    let endingChar = -1;

    let index = 1;
    while(bracketsCounter !== 0) {

        let slicedEventArray = slicedEventString.split('');
        let character = slicedEventArray[index];

        if (character === "{") {
            bracketsCounter++;
        } else if (character === "}"){
            bracketsCounter--;
        }

        if (bracketsCounter === 0) {
            // returns ending char
            endingChar = index;
            break;
        }

        index++;
    }


    return endingChar;

};

module.exports = { processEventFile, processEvent };

