const express = require('express');
const router = express.Router();
const FipeController = require('../controllers/FipeController');

    
// router.get('/add', checkAuth, ToughtController.createTought);
// router.post('/add', checkAuth, ToughtController.createToughtPost);
// router.post('/remove', checkAuth, ToughtController.removeTought);
// router.get('/edit/:id', checkAuth, ToughtController.editTought);
// router.post('/edit/', checkAuth, ToughtController.editToughtPost);
// router.get('/dashboard', checkAuth, ToughtController.dashboard);
router.get('/vehicles', FipeController.showVehicles);


module.exports = router;