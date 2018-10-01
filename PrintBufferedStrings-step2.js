var https = require('https');
// var buffer = new ArrayBuffer(1024);


function getAndPrintHTML () {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    let dataBuffed = "";

    console.log("Getting the chunks...");

    https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
// this is the buffer step        
        dataBuffed += data;
    });



// this code ends the stream.
    response.on('end', function() {
        console.log(dataBuffed + '\n');
        console.log('Response stream complete.');

    });

});

}

//this invokes the function, so important.

getAndPrintHTML();

