var filterFn = require('./my_module.js')

var data = process.argv[2]

var filt = process.argv[3]

filterFn(data, filt, function (err, list) {

if (err)

return console.error('Error:', err)

list.forEach(function (file) {

console.log(file)

})

})