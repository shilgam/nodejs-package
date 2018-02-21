import path from 'path';

const fs = require('fs');

const dataPath = 'data.json';

const content = fs.readFileSync(path.resolve(__dirname, dataPath));

console.log('Output Content : ');
// console.log(JSON.parse(content));

console.log(JSON.parse(content).data.map(x => x.id));
