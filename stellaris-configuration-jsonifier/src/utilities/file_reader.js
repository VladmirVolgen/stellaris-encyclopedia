const fs = require('fs');

/**
 * This method process a group of files on a given folder an returns an array of strings
 * with the contents of the files.
 * @param dirPath
 * @returns filesContent array
 */
processFiles = function(dirPath) {

    const fileNames = fs.readdirSync(dirPath);
    let filesContent = [];

    fileNames.forEach((fileName) => {
        filesContent.push(readFile(dirPath + fileName));
    });

    return filesContent;


};

const readFile = function(filePath) {
    return fs.readFileSync(filePath).toString();
};

module.exports = {processFiles};
