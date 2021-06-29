// var store = require('app-store-scraper');

// for (let i=0; i<5; i++) {

//   store.list({
//     collection: store.collection.TOP_FREE_IPAD,
//     // category: store.category.GAMES_ACTION,
//     num: 50
//   })
//   .then(data => {
//     console.log(data[0].title)
//     console.log(`Round: ${i}`)
//   })
//   .catch(console.log);

<<<<<<< HEAD
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
=======
// }

var store = require('app-store-scraper');
>>>>>>> dd8575d76745262478c11fc11c3dbad8b09c324e

store.list({
  collection: store.collection.TOP_FREE_IPAD,
  category: store.category.GAMES_ACTION,
  num: 2
})
.then(console.log)
.catch(console.log);