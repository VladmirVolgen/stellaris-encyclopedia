const { getKeyValueForString, determineEventStartCharLocation } = require('./string_value_finder');

describe('getKeyValueForString test', () => {

    let keyString;
    let text;
    let endString
    
    beforeEach(() => {
        keyString = 'id ='
        text = '{ mockedValue = 1 id = This is a test \n }'
        endString = '\n'
    });

    test('Should get a key value from a Stellaris event string', () => {

        const result = 'This is a test';

        expect(getKeyValueForString(text, keyString, endString)).toBe(result);

    });

    test('Should get -1 when searching a key value that does not exist in the Stellaris event string', () => {

        keyString = 'Not a key'
        expect(getKeyValueForString(text, keyString, endString)).toBe(null);
    });
});

describe('determineEventStartCharLocation tests', () => {

    let eventFileString;

    beforeEach(() => {
        eventFileString = '{ key = this is a mock stellaris event }';
    });

    test('Should return the position of { in the given string', () => {
        expect(determineEventStartCharLocation(eventFileString)).toBe(0);
    });

    test('Should return -1 if it does not find a } character', () => {
        eventFileString = 'This is a failing test';

        expect(determineEventStartCharLocation(eventFileString)).toBe(-1);
    });
})