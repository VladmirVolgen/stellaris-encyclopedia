const readNamespaces = require('./read_namespaces');
const fs = require('fs');
const { getFileList } = require('../utilities/file_reader');


test('Should return a list of namespaces with files assigned', () => {

    const dir = './test/read_namespaces/success'
    const files = getFileList(dir);


    const expectedResult = {
        test1: [`${dir}/file1.txt`, `${dir}/file2.txt`],
        test2: [`${dir}/file3.txt`] 
    }

    expect(readNamespaces(files)).toEqual(expectedResult);

    
});