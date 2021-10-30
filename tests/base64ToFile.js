const fs = require('fs');

const file = ""

fs.writeFileSync('test.png', new Buffer(file, 'base64').toString('binary'), "binary", function (err) {
    console.log(err); // writes out file without error, but it's not a valid image
});