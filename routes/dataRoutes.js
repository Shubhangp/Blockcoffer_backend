const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.route('/').get(dataController.getAllIndustryData).post(dataController.createIndustryData);

router.route('/:id').get(dataController.getIndustryData).patch(dataController.updateIndustryData);

module.exports = router;