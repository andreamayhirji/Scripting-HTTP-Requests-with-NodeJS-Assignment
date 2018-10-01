var https = require('https');

// ask a mentor later why it worked using function getAndPrintHTML(options)
function getAndPrintHTML(options) {

    let buffedData = "";


    https.get(options, function (response) {
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

// requestOptions has been moved out of the function
// You made the function more modular by passing in the host and path as an object instead of hardcoding the requestOptions inside the function.


var requestOptions1 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

var requestOptions2 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

var requestOptions3 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions1);
getAndPrintHTML(requestOptions2);
getAndPrintHTML(requestOptions3);