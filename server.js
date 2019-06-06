const fs = require('fs')

function callback(err, index){
    if(err)
    throw err;

    console.log(index)
}

let handler = function (err) {
	if (err) {
		console.log("El archivo no existe")
} else {
    console.log("El archivo existe")
    fs.readFile('static/index.html','utf-8', callback)
}
}
fs.access('static/index.html', fs.constants.F_OK, handler)



