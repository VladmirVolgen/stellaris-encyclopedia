
/**
 * This function finds the ending bracket given a string where the begining bracket has been found
 * @param slicedEventString
 * @param eventStartingIndex
 * @returns {number}, ending bracket index
 */
const determineEventEndingCharLocation = (slicedEventString, eventStartingIndex) => {

    let bracketsCounter = 0;
    let endingChar = -1;

    slicedEventString.split('').forEach( (character, index) => {

        if (character === "{") {
            bracketsCounter++;
        } else if (character === "}"){
            bracketsCounter--;
        }

        if (bracketsCounter === 0) {
            // returns ending char
            endingChar = index + eventStartingIndex;
        }

    });

    return endingChar;

};

