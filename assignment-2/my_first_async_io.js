var fs = require('fs')

var data = process.argv[2]

info = fs.readFile(data, function(err, data) {

console.log(data.toString().split('\n').length - 1)

})