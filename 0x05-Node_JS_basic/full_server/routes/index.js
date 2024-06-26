const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

const router = express.Router();

router.get('/', (req, res) => AppController.getHomepage(req, res));
router.get('/students', (req, res) => StudentsController.getAllStudents(req, res));
router.get('/students/:major', (req, res) => StudentsController.getAllStudentsByMajor(req, res));

module.exports = router;
