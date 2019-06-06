const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'static/hola.txt')

fs.open(filePath, "r", function (error, fileDescriptor) {
    if (error) {
		console.log("El archivo no existe")
} else {
	console.log("El archivo existe")
}
})