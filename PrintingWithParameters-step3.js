var https = require('https');

// ask a mentor later why it worked using function getAndPrintHTML(options)
function getAndPrintHTML(options) {

    let buffedData = "";


    https.get(requestOptions, function (response) {
        response.setEncoding('UTF8');
        response.on('data', function (data) {
            buffedData += data;
        });

        response.on('end', function () {
            console.log(buffedData + '/n');
            console.log('Response stream completed.')

        });

    });

};


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);