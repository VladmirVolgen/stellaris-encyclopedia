const {getKeyValueForString} = require('./string_value_finder');

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