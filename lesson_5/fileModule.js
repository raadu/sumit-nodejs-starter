// fs module Works with file system
const fs = require('fs');

const text = 'This is a sample text input';

// Write a new file
fs.writeFileSync('file.txt', text);
fs.appendFileSync('file.txt', '\tadded more text');

// Read a file synchronously
const data = fs.readFileSync('file.txt');
// Convert to string as the result is in binary / buffer
console.log('data from sync readFile: ', data.toString());

// Read a file using asynchronous readFile method
async function getData() {
    const readData = await fs.promises.readFile('file.txt', 'binary');
    return readData;
}

getData().then((data) => {
    console.log(data);
});
