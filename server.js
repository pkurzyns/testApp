// var http = require('http');
// const express = require('express');
// const app = new express();



const express = require('express')
const app = express()
const port = 3000

app.get('/', function(request, response){
    response.sendFile('/Users/pawelkurzynski/Documents/GIT/new Node project /main/fitcento/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// function onRequest(request, response){
//     response.writeHead(200,{'Content-Type': 'text/plain'})
//     response.write(app)
//     response.end();
// }
