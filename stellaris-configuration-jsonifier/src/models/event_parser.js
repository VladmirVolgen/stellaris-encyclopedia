
const processEventFile = (fileRemainingContents, eventsList) => {

    // Search for the beginning of the event. Will return index of the trimmed fileContents
    let startIndex = determineEventStartCharLocation(fileRemainingContents);
    // determine if there are results
    if (startIndex === -1) return eventsList;

    // Make file smaller
    fileRemainingContents = fileRemainingContents.slice(startIndex);
    // Get ending char
    const endingChar = determineEventEndingCharLocation(fileRemainingContents);

    // push event to list
    const eventContents = fileRemainingContents.slice(0, endingChar);
    eventsList.push(eventContents);
    console.log(`Events processed: ${eventsList.length}`)

    // Remove event from the remaining file to process
    fileRemainingContents = fileRemainingContents.slice(endingChar);

    return processEventFile(fileRemainingContents, eventsList);


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

