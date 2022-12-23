const { Router } = require('express')
const {
	addPrinter,
	getPrinters,
	updatePrinter,
	deletePrinter,
} = require('../controllers/printerController')

const router = Router()

router.get('', getPrinters)
router.post('', addPrinter)
router.patch('/:id', updatePrinter)
router.delete('/:id', deletePrinter)

module.exports = router
