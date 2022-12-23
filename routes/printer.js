const { Router } = require('express')
const {
	addPrinter,
	getPrinters,
	updatePrinter,
	deletePrinter,
	getPrinter
} = require('../controllers/printerController')

const router = Router()

router.get('', getPrinters)
router.get('/:id', getPrinter)
router.post('', addPrinter)
router.put('/:id', updatePrinter)
router.delete('/:id', deletePrinter)

module.exports = router
