let async = require('async');

async.series([
    one,
    two,
    three
],
    function (err, results) {
        console.log(results);
    });


function one(callback) {
    console.log('one');
    callback(null, 1);
}
function two(callback) {
    console.log('two');
    callback(null, 2);
}
function three(callback) {
    console.log('three');
    callback(null, 3);
}