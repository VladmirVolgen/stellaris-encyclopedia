/**
 * This function finds the ending bracket given a string where the beginning bracket has been found
 * @param slicedEventString
 * @returns {number}, ending bracket index
 */

const determineEventEndingCharLocation = function (slicedEventString) {


    let bracketsCounter = 1;
    let endingChar = -1;
    let index = 1;

    while (bracketsCounter !== 0) {

        let slicedEventArray = slicedEventString.split('');
        let character = slicedEventArray[index];

        if (character === "{") {
            bracketsCounter++;
        } else if (character === "}") {
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


const determineEventStartCharLocation = (eventRemainingString) => {
    return eventRemainingString.search('{');
};


module.exports = {determineEventEndingCharLocation, determineEventStartCharLocation};