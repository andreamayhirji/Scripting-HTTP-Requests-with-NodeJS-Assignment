var https = require('https');

// ask a mentor later why it worked using function getAndPrintHTML(options)
function getAndPrintHTML() {

    var options = {
        host: (process.argv[2]),
        path: (process.argv[3])
    }

    let buffedData = "";


    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            buffedData += data;
        });

        response.on('end', function () {
            console.log(buffedData + '/n');
            console.log('Response stream completed.')

        });

    });

};



// var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step3.html'
// };

getAndPrintHTML();