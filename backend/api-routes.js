// api-routes.js

// Initialize express router
let router = require('express').Router();


// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var wavesController = require('./controllers/wavesController');
var metricsController = require('./controllers/metricsController');
// Contact routes
router.route('/waves')
    .get(wavesController.getLastBlock);
router.route('/metrics')
    .get(metricsController.index)
    .post(metricsController.create);
router.route('/metrics/:metrics_id')
    .get(metricsController.view);

// Export API routes
module.exports = router;