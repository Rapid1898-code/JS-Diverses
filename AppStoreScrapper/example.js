const ObjectsToCsv = require('objects-to-csv');
const store = require('app-store-scraper');

// show infos for specific ID
store.app({id: 1523820531}).then(console.log).catch(console.log);

// // show all infos for a collection / category
// store.list({
//   collection: store.collection.TOP_FREE_IPAD,
//   category: store.category.GAMES_ACTION,
//   num: 50
// })
// .then(appStoreScraperListResult => {
//   console.log(appStoreScraperListResult)
//   const csv = new ObjectsToCsv(appStoreScraperListResult)
//   csv.toDisk("./test.csv")
// })
// .catch(console.log);