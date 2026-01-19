const express = require('express');
const router = express.Router();
const { getServices, createService, getServiceBySlug } = require('../controllers/serviceController');

// /api/services kök dizinine gelen istekler
router.route('/')
    .get(getServices)
    .post(createService);

// Tekil hizmet isteği
router.route('/:slug')
    .get(getServiceBySlug);

module.exports = router;