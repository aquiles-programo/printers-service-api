const { Schema, model } = require('mongoose')

const PrinterSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	ip: {
		type: String,
		unique: true,
	},
	warehouse: {
		type: String,
		index: true
	},
})

module.exports = model('Printer', PrinterSchema)
