const fs = require('fs');

const dataReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const dataWriteStream = fs.createWriteStream(`${__dirname}/writtenData.txt`);

dataReadStream.on('data', (chunk) => {
    dataWriteStream.write(chunk);
});

// This is can be done by using pipe
// dataReadStream.pipe(dataWriteStream);
