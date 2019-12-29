const {findLocalisationEntry} = require("../utilities/localisation_entry_finder");
const {determineEventEndingCharLocation, getKeyValueForString} = require('../utilities/string_value_finder');
/**
 * This method generates a Stellaris event in json format, transforming the peculiar
 * txt event files from the game. They keys to be parsed are defined in the app-config.json
 * @param {String} eventString The event string with the txt format
 * @param {Object} configuration app-config.json with the event keys to be extracted.
 */
const createJSONEvent = function (eventString, configuration) {
    const eventKeys = configuration.eventKeys
    let event = {}

    eventKeys.forEach(eventKey => {
        // When the eventKey is an object determine ending bracket and slice 
        if (eventKey.valueType === "object") {

            const eventKeyStartIndex = eventString.indexOf(eventKey.startKey) 
                + eventKey.startKey.length
            const eventKeyEndIndex = determineEventEndingCharLocation(eventString.slice(), eventKeyStartIndex) + eventKeyStartIndex;
            event[eventKey.name] = eventString.slice(eventKeyStartIndex, eventKeyEndIndex);
            
        } else if (eventKey.valueType === "string"){
            event[eventKey.name] = getKeyValueForString(eventString, eventKey.startKey, eventKey.endValue);
        }
        
    });

    return JSON.stringify(event);
     
}


module.exports = { createJSONEvent };