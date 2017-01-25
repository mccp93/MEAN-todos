const router = require('express').Router();

router.use('/task', require('./task/task.routes'));

module.exports = router;