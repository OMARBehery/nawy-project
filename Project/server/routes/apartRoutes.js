const { Router } = require('express');
const apartController = require('../controllers/apartController');

const router = Router();

router.get('/apart-list', apartController.list_get);
router.post('/add-apart', apartController.apart_post);
router.get('/apart/:id', apartController.apartid_get);

module.exports = router;