const fs = require('fs')

fs.access('static/index.html', fs.constants.F_OK, function (err) {
	if (err) {
		console.log("El archivo no existe")
} else {
	console.log("El archivo existe")
}
})
