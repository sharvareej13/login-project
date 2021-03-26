const express = require('express')
const router = express.Router()

const PersonController = require('../controllers/PersonController')
const authenticate = require('../middleware/authenticate')

router.get('/', authenticate, PersonController.index)
router.post('/show', PersonController.show)
router.post('/store', PersonController.store)
router.post('/update', PersonController.update)
router.post('/delete', PersonController.destroy)

module.exports = router