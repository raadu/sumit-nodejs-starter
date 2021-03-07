const os = require('os');

const platform = os.platform();
const homeDirectory = os.homedir();
const freeMemory = os.freemem();
const cpuCoreDetails = os.cpus();
const architecture = os.arch();
const hostName = os.hostname();
const totalMemory = os.totalmem();
const OSType = os.type(); // OS Kernel
const uptime = os.uptime();
const userInfo = os.userInfo();

console.log('platform: ', platform);
console.log('homeDirectory: ', homeDirectory);
console.log('freeMemory: ', freeMemory);
console.log('architecture: ', architecture);
console.log('hostName: ', hostName);
console.log('totalMemory: ', totalMemory);
console.log('OSType: ', OSType);
console.log('uptime: ', uptime);
console.log('userInfo: ', userInfo);
// console.log('cpuCoreDetails: ', cpuCoreDetails);
