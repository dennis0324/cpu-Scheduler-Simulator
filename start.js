const {execFile} = require('child_process')
console.log(process.argv)

let path = process.argv.find(e => e.indexOf("path") > -1)
if(!path) throw new Error("Path not found")
path = path.split(":")[1]

const child = execFile('ts-node', ["-r", "tsconfig-paths/register",path], (error, stdout, stderr) => {
    if (error) {
       console.error(error);
    }
    console.log(stdout);
});