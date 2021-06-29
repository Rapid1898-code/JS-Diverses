var store = require('app-store-scraper');

for (let i=0; i<5; i++) {

  store.list({
    collection: store.collection.TOP_FREE_IPAD,
    // category: store.category.GAMES_ACTION,
    num: 2
  })
  .then(data => {
    console.log(data[0])
    console.log(`Round: ${i}`)
  })
  .catch(console.log);

}