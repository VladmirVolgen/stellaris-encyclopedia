
const processEventFile = (fileContents, processIndex, eventsList) => {

    // Search for the beginning of the event. Will return index of the trimmed fileContents
    let startIndex = determineEventStartCharLocation(fileContents, processIndex);
    // determine if there are results
    if (startIndex === -1) return eventsList;

    processIndex = startIndex + processIndex;

    // Get ending char
    let slicedEventString = fileContents.slice(processIndex);
    const endingChar = determineEventEndingCharLocation(slicedEventString, processIndex);

    // push event to list
    eventsList.push(fileContents.slice(processIndex, endingChar));

    // define starting index for next event search
    processIndex = endingChar + 1;

    return processEventFile(fileContents, processIndex, eventsList);


};

const processEvent = (eventString) => {
    //TODO: process a single event and returns an object with all the data.
};

const determineEventStartCharLocation = (eventString, processIndex) => {
    return eventString.slice(processIndex).search('{');
};

/**
 * This function finds the ending bracket given a string where the beginning bracket has been found
 * @param slicedEventString
 * @param eventStartingIndex
 * @returns {number}, ending bracket index
 */
const determineEventEndingCharLocation = (slicedEventString, eventStartingIndex) => {
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
            endingChar = index + eventStartingIndex;
            break;
        }

        index++;
    }


    return endingChar;

};

module.exports = processEventFile;

