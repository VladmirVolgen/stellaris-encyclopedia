const {writeEventFile, writeEvent} = require('./event_writer');
const fs = require('fs');

describe('writeEvent tests', () => {

    let eventString;
    let filePath;

    beforeEach(() => {


        eventString = `{
            id = test
        }`
        filePath = './test-file.json' 

    })


    test('Should write an event succesfully into a file', () => {

        writeEvent(eventString, 0, 1, filePath);

        // check file

        const fileString = fs.readFileSync(filePath).toString();
        expect(fileString.includes(`"id":"test"`)).toBeTruthy();

        // delete file
        fs.unlink(filePath, (err) => {
            if (err) throw err;
          });
    })

    test('Should fail to write an event into a file', () => {
        expect(() => {
            writeEvent(eventString, 0, 1, '/^ malformed dir')
        }).toThrow();
        
    }) 
});

describe('writeEventFile', () => {

    let pathToStorySample;

    beforeEach(() => {
        pathToStorySample = './test/event_writer/story_sample/story_sample_events.txt'
    });

    test('Should write an event folder given a text file', () => {
        
        const eventFileString = fs.readFileSync(pathToStorySample).toString();

        writeEventFile(eventFileString, 0, './test-output.json');

        const jsonOutput = fs.readFileSync('./test-output.json').toString();
        expect(jsonOutput.includes('},{')).toBeTruthy();
        expect(jsonOutput.includes('"id":"story.1"')).toBeTruthy();
        expect(jsonOutput.includes('"id":"story.2"')).toBeTruthy();

        fs.unlinkSync('./test-output.json');

    });

});
