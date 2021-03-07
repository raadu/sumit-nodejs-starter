const path = require('path');

// Get current file full path with __filename
const pathName = path.basename(__filename);
const dirName = path.dirname(__filename);
const extName = path.extname(__filename);
const parsed = path.parse(__filename);

console.log('pathname: ', pathName);
console.log('dirName: ', dirName);
console.log('extname: ', extName);
console.log('parsed: ', parsed);
