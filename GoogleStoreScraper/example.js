var gplay = require('google-play-scraper');

gplay.list({
  category: gplay.category.GAME_ACTION,
  collection: gplay.collection.TOP_FREE,
  num: 2,
  fullDetail: true    
})
.then(data => {
  // console.log(data[0])
  console.log(Object.keys(data[0]))
})
.catch(console.log);  



// .then(console.log, console.log);