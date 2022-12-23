const Printer = require('../models/printer')

const store = (printer) => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await Printer.create(printer)
			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
}

const update = (_id, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { modifiedCount } = await Printer.updateOne({ _id }, data)
			if (modifiedCount) return resolve(true)
			reject('Impresora no encontrada')
		} catch (error) {
			reject(error)
		}
	})
}

const remove = (_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { deletedCount } = await Printer.deleteOne({ _id })
			if (deletedCount) return resolve(true)
			reject('Impresora no encontrada')
		} catch (error) {
			reject(error)
		}
	})
}

const updatePrinter = (printer, { name, ip, warehouse }) => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await update(printer, { name, ip, warehouse })
			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
}

const deletePrinter = (printer) => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await remove(printer)
			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
}

const addPrinter = (name, ip, warehouse) => {
	return new Promise(async (resolve, reject) => {
		try {
			const printer = await store({ name, ip, warehouse })
			resolve(printer)
		} catch (error) {
			reject(error)
		}
	})
}

const getPrinters = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await Printer.find({})
			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
}

const getPrinter = (_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await Printer.findOne({_id})
			if (!data) reject("Not Found")

			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = {
	getPrinters,
	getPrinter,
	addPrinter,
	updatePrinter,
	deletePrinter,
}
