var fs = require('fs')

var data = process.argv[2]

info = fs.readFileSync(data)

console.log(info.toString().split('\n').length - 1)