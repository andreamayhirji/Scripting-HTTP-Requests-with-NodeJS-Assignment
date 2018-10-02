var https = require('https');

function getHTML(options, callback) {

    let buffedData = "";


    https.get(options, function (response) {
        response.setEncoding('UTF8');
        response.on('data', function (data) {
            buffedData += data;
        });


        response.on('end', function () {
            callback(buffedData);
            console.log('Response stream completed.');
        });


    });
}

//callback
function printHTML(html) {
    console.log(html);
}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};


getHTML(requestOptions, printHTML);