var gplay = require('google-play-scraper');

gplay.list({
  category: gplay.category.TOP_FREE,
  collection: gplay.collection.FINANCE,
  num: 2,
  fullDetail: true    
})
.then(data => {
  console.log(data[0])
  // console.log(Object.keys(data[0]))
})
.catch(console.log);  



// .then(console.log, console.log);