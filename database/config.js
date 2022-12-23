const { default: mongoose } = require('mongoose')

const mongoConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log('Mongo Connected')
	} catch (error) {
		console.error(error.message)
	}
}

module.exports = {
	mongoConnect,
}
