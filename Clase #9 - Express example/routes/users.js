var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:start/:end', function (req, res) {
  console.log("Starting Page: ", req.params['start']);
  console.log("Ending Page: ", req.params['end']);
  res.status(200).send('asds');
})

module.exports = router;
