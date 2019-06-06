const http = require('http')
const fs = require('fs')
const port = 9000

function responseHandler (request, response) {
    let path = request.url
    let pathFile = 'static/'+path
    function callback(err, data){
        if(err)
        throw err;
        response.write(data)
        response.end()
    
    }
    
    let handler = function (err) {
        if (err) {
            console.log("El archivo no existe")
    } else {
        console.log("El archivo existe")
        fs.readFile(pathFile,'utf-8', callback)
    }
    }

    fs.access('static/index.html', fs.constants.F_OK, handler)
}


const server = http.createServer(responseHandler)

server.listen(port)