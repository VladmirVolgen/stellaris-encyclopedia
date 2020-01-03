const fs = require('fs');
const { getKeyValueForString } = require('../utilities/string_value_finder')
const { readFile } = require('../utilities/file_reader');

const readNamespaces = function (files) {

    let namespaces = {}
   
    files.forEach(file => {
        let fileString = readFile(file);
        let namespace = getKeyValueForString(fileString, 'namespace =', '\n').trim();

        // if namespace[namespace] exists
        if (namespaces[namespace]) {
            namespaces[namespace].push(file);
        } else {
            namespaces[namespace] = [file]
        }
    });

   return namespaces;


}

module.exports = readNamespaces;