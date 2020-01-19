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
