const fs = require('fs');

// Create a read data stream
// Add directory link and which format do you want
const dataReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');

// Listen to data event on read stream
dataReadStream.on('data', (data) => {
    console.log(data);
});
