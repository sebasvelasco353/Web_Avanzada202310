var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/claseWeb', function(req, res, next) {
  // llamamos a la bd y procesamos lo que me pidieron
  res.status(200).send({
    cosa: 'q',
    objeto: {
      a: 'b'
    }
  })
})

module.exports = router;
