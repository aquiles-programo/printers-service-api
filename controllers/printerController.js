const printerService = require('../services/printerService')

const getPrinters = async (_, response) => {
	try {
		const data = await printerService.getPrinters()
		response.status(200).json({ message: 'Impresoras cargadas', data })
	} catch (error) {
		console.error(error)
		response.status(500).json({ error })
	}
}

const addPrinter = async (request, response) => {
	try {
		const { name, ip, warehouse } = request.body
		const data = await printerService.addPrinter(name, ip, warehouse)
		response.status(200).json({ message: 'Impresora registrada', data })
	} catch (error) {
		console.error(error)
		response.status(500).json({ error })
	}
}

const deletePrinter = async (request, response) => {
	try {
		const printer = request.params.id
		const data = await printerService.deletePrinter(printer)
		response.status(200).json({ message: 'Impresora eliminada', data })
	} catch (error) {
		console.error(error)
		response.status(500).json({ error })
	}
}

const updatePrinter = async (request, response) => {
	try {
		const printer = request.params.id
		const data = await printerService.updatePrinter(printer, request.body)
		response.status(200).json({ message: 'Impresora actualizada', data })
	} catch (error) {
		console.error(error)
		response.status(500).json({ error })
	}
}

module.exports = {
	getPrinters,
	addPrinter,
	updatePrinter,
	deletePrinter,
}
