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

/**
 * This method gets the value if it is separated by a new line.
 * @param {String} text The text that is going to be searched.
 * @param {String} keyString  The key that needs to be found in the text.
 * @param {String} endString The character that points the end of the key-value pair
 *
 */

const getKeyValueForString = function(text, keyString, endString) {

    let value = null;

    const indexOfKeyString = text.indexOf(keyString);

    const startIndex = indexOfKeyString + keyString.length;
    const endIndex = text.indexOf(endString, startIndex);

    if (indexOfKeyString !== -1 && endIndex !== -1) {
        value = text.slice(startIndex, endIndex).trim();
    }
    
    return value;

};


module.exports = { determineEventEndingCharLocation, determineEventStartCharLocation, getKeyValueForString };