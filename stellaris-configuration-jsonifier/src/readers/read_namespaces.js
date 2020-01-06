const fs = require('fs');
const { getKeyValueForString } = require('../utilities/string_value_finder')
const { readFile } = require('../utilities/file_reader');

/**
 * This method determines all namespaces present in a list of files.
 * @param {Array} files A list of Strings that points the 
 * path to files 
 * @returns {Object} return all namespaces with files assigned to them
 *      example : {namespaceName: [file1WithNamespace, file2WithNamespace]}
 */
const readNamespaces = function (files) {

    let namespaces = {}
   
    files.forEach(file => {
        let fileString = readFile(file);
        let namespace = getKeyValueForString(fileString, 'namespace =', '\n');
        if (namespace === null) return;

        namespace = namespace.trim();

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