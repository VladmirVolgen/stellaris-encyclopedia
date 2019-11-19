const { processFiles } = require('./file_reader');
const { getKeyValueForString } = require('./string_value_finder');

const findLocalisationEntry = function(keyString, localisationPath) {

    let entryValue = null;

    // for each file look for the key, if found return the value
    const files = processFiles(localisationPath);

    for (let index = 0; index < files.length; index++) {

        const file = files[index];

        if (file.includes(keyString)) {

            let rawValue = getKeyValueForString(file, keyString);

            // process and clean value
            return rawValue.slice(rawValue.indexOf(`"`) + 1, rawValue.lastIndexOf(`"`) - 1);

        }
    }

    return entryValue;

};

module.exports = { findLocalisationEntry };