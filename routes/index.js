var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('./home/index', { title: 'Home' });
});

/* GET specific game info */
router.get('/games/:gameTitle', function(req, res) {
  res.render('./home/game', { title: 'single game' });
});

/* GET list of all games we have on record */
router.get('/games', function(req, res) {
  console.log("get route"); //this part works
    // console.log(db.game_tables);
    db.game_tables.findAll().then(function(data){
        console.log("/games route working");
        console.log(data);

        

  res.render('./home/gameList', {title: 'game list',  gamesList: data});
  })
});

//route for search results, added by Leo 1.17.18

router.get('/search/:filter', require('../public/javascripts/apiCall').getGames);

module.exports = router;