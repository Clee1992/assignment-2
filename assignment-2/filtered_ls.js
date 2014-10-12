var fs = require('fs')

var data = process.argv[2]

var filt = RegExp('\\.' + process.argv[3] + '$')

info = fs.readdir(data, function(err, list) {

for (i = 0; i < list.length; i++) {

if (filt.test(list[i])) {

console.log(list[i]);

}

}

})