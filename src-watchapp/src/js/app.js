var UI = require('ui');
var Settings = require('settings');


var landingCard = new UI.Card({
  title: 'Generate Token',
});
landingCard.body('Press Select to Generate');
landingCard.style("small");
landingCard.show();

landingCard.on('click', function(e) {
  if (e.button == 'select') {
    Pebble.getTimelineToken(function(token) {
      console.log('My timeline token is ' + token);
      landingCard.subtitle('Token: ' + token);
      landingCard.body('Open settings in the pebble app to easily copy the token');
      Settings.option("token", token);
    }, function(error) {
      console.log('Error getting timeline token: ' + error);
      landingCard.subtitle('Error: ' + error);
    });
  }
});

Settings.config(
  { url: "https://willow.systems/pebble-generateToken", hash: true },
  function(e) {
    console.log('closed settings');
  }
);
