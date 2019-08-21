let async = require('async');

async.parallel([one, two], (err, results) => {
    console.log(results);
});

function one(callback) {
    setTimeout(function () {
        console.log('Task One');
        callback(null, 1);
    }, 200);
}

function two(callback) {
    setTimeout(function () {
        console.log('Task Two');
        callback(null, 2);
    }, 100);
}