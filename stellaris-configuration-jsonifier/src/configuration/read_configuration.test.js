const readAppConfiguration = require('./read_configuration');

test('read_configuration is able to read the app-config.json', () => {
    expect(readAppConfiguration instanceof Object).toBe(true);
})