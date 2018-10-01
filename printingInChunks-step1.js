const https = require('https');
// var data = '';

function getAndPrintHTMLChunks () {

    //request the to the sytantris.github.io
    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    console.log("Getting the length of chunks...");

    https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
        console.log(data + '\n');
    });



    //ends the stream
    response.on('end', function() {
        // console.log('Response stream complete.');
    });
});

}

getAndPrintHTMLChunks();

