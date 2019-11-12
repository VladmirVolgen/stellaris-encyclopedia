const {determineEventEndingCharLocation} = require('../utilities/event_brackets_finder');


const Event = function (eventString) {

    this.id = this.getId(eventString);
    this.title = this.getTitle(eventString);
    this.description = this.getDescription(eventString);
    this.picture = this.getPicture(eventString);
    this.options = this.getOptions(eventString);

};


Event.prototype.getId = function (eventString) {
    const idKey = 'id =';
    return this.getKeyValueForString(eventString, idKey);

};


Event.prototype.getTitle = function (eventString) {

    const titleKey = 'title =';
    return this.getKeyValueForString(eventString, titleKey);

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

        desc = this.getKeyValueForString(eventString, descStringKey);

    }

    return desc;

};


Event.prototype.getPicture = function (eventString) {

    const pictureKey = 'picture =';

    return this.getKeyValueForString(eventString, pictureKey);

};


Event.prototype.getOptions = function (eventString) {

    const optionKey = 'option = {';
    const optionsInEvent = eventString.split(optionKey).length - 1;

    let options = [];

    for (let i = 0; i < optionsInEvent; i++) {

        const optionStartIndex = eventString.indexOf(optionKey) + optionKey.length;
        const optionEndIndex = determineEventEndingCharLocation(eventString.slice(optionStartIndex)) + optionStartIndex;

        options.push(eventString.slice(optionStartIndex, optionEndIndex))

        eventString = eventString.slice(optionEndIndex);

    }

    return options;

};

Event.prototype.getKeyValueForString = function (eventString, key) {

    const startIndex = eventString.indexOf(key) + key.length;
    const endIndex = eventString.indexOf(`\n`, startIndex);
    const value = eventString.slice(startIndex, endIndex).trim();


    return value;

};


module.exports = { Event };