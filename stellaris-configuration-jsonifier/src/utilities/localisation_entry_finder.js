const { processFiles } = require('./file_reader');
const { getKeyValueForString } = require('./string_value_finder');
const fs = require('fs');

/**
 * Finds a localisation entry given the key for the value
 * @param keyString
 * @returns entryValue String returns the value for the entry.
 */
const findLocalisationEntry = function(keyString) {
    // Read configuration
    const config = fs.readFileSync('../app-config.json');
    const localisationPath = JSON.parse(config).pathToLocalisation;


    let entryValue = null;

    // for each file look for the key, if found return the value
    const files = processFiles(localisationPath);

    for (let index = 0; index < files.length; index++) {

        const file = files[index];

        if (file.includes(keyString)) {

            let rawValue = getKeyValueForString(file, keyString);

            // process and clean value
            return rawValue.slice(rawValue.indexOf(`"`) + 1, rawValue.lastIndexOf(`"`) );

        }
    }

    return entryValue;

};

module.exports = { findLocalisationEntry };