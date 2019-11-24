const {findLocalisationEntry} = require("../utilities/localisation_entry_finder");
const {determineEventEndingCharLocation, getKeyValueForString} = require('../utilities/string_value_finder');

/**
 * Event constructor. Gets all the properties from an event.
 * @param eventString
 * @constructor
 */
const Event = function (eventString) {
    this.id = this.getId(eventString);
    this.title = this.getTitle(eventString);
    this.description = this.getDescription(eventString);
    this.picture = this.getPicture(eventString);
    this.options = this.getOptions(eventString);

};


Event.prototype.getId = function (eventString) {
    const idKey = 'id =';
    return getKeyValueForString(eventString, idKey);

};


Event.prototype.getTitle = function (eventString) {

    const titleKey = 'title =';
    const rawValue = getKeyValueForString(eventString, titleKey);
    const localisationValue = findLocalisationEntry(rawValue);
    if (localisationValue !== null) return localisationValue;
    return rawValue;

};


Event.prototype.getDescription = function (eventString) {

    const descObjectKey = 'desc = {';
    const descStringKey = 'desc =';

    let desc = null;

    if (eventString.indexOf(descObjectKey) !== -1) {

        const descStartIndex = eventString.indexOf(descObjectKey) + descObjectKey.length;
        const descEndIndex = determineEventEndingCharLocation(eventString.slice(descStartIndex)) + descStartIndex;
        desc = eventString.slice(descStartIndex, descEndIndex);

    } else {

        desc = getKeyValueForString(eventString, descStringKey);

    }

    return desc;

};


Event.prototype.getPicture = function (eventString) {

    const pictureKey = 'picture =';

    return getKeyValueForString(eventString, pictureKey);

};


Event.prototype.getOptions = function (eventString) {

    const optionKey = 'option = {';
    const optionsInEvent = eventString.split(optionKey).length - 1;

    let options = [];

    for (let i = 0; i < optionsInEvent; i++) {

        const optionStartIndex = eventString.indexOf(optionKey) + optionKey.length;
        const optionEndIndex = determineEventEndingCharLocation(eventString.slice(optionStartIndex)) + optionStartIndex;

        options.push(eventString.slice(optionStartIndex, optionEndIndex));

        eventString = eventString.slice(optionEndIndex);

    }

    return options;

};


module.exports = { Event };