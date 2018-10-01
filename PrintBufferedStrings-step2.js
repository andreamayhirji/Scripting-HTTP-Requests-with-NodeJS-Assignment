var https = require('https');
// var buffer = new ArrayBuffer(1024);


function getAndPrintHTML () {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    console.log("Getting the chunks...");

    https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
// ask a mentor if this is the correct buffer step        
        let dataBuffed = data;
        console.log(dataBuffed + '\n');
    });



// this code ends the stream.
    response.on('end', function() {
        console.log('Response stream complete.');
    });
});

}

//this invokes the function, so important.

getAndPrintHTML();

