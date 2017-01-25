const router = require('express').Router();

router.get('/', function(req, res, next){
    res.send("Hello, world @ tasks");
});

module.exports = router;