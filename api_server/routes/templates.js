const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const { getTemplates, createTemplate, getTemplate } = require('../controllers/templates');

router.get('/', auth, getTemplates);
router.get('/:id', auth, getTemplate);
router.post('/', auth, createTemplate);

module.exports = router;
