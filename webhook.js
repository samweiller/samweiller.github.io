app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'castle_brain_table_foursquare_orientation_jupiter') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});