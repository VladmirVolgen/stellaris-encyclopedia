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

const processEvent = (eventString) => {
    //TODO: process a single event and returns an object with all the data.
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

module.exports = processEventFile;

