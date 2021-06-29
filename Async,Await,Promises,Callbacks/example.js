// https://www.youtube.com/watch?v=ZYb_ZU8LNxs&list=WL&index=1&t=1331s

// // Example 1 - using a callback - function in a function
// let order = (call_production) => {
//   console.log("Order placed - pls call production")
//   call_production()
// }
// let production = () => {
//   console.log("Order received - starting production")
// }
// order(production)



// // Example 2 - callback hell
// let stocks = {
//   Fruits : ["strawberry","grapes","banana","apple"],
//   liquid : ["water","ice"],
//   holder : ["cone","cup","stick"],
//   toppings : ["chocolate","peanuts"]
// }

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//     call_production()    
//   },2000)

// }

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started")
//     setTimeout(() => {
//       console.log("the food has been chopped")
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//         setTimeout(() => {
//           console.log("the machine was started")
//           setTimeout(() => {
//             console.log(`icecream was placed on ${stocks.holder[0]}`)
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as toppings`)
//               setTimeout(() => {
//                 console.log("serve icecream")
//               },2000)
//             },3000)
//           },2000)
//         },1000)
//       },1000)
//     },2000)
//   },0000)
// }

// order(0,production)



// // Example 3 - promises
// // Promise => Pending  => Resolve  => .then, .then, .finally
// //                     => Reject   => .catch, .finally
// let stocks = {
//   Fruits : ["strawberry","grapes","banana","apple"],
//   liquid : ["water","ice"],
//   holder : ["cone","cup","stick"],
//   toppings : ["chocolate","peanuts"]
// }

// let is_shop_open = true

// let order = (time, work) => {
//   return new Promise( (resolve,reject) => {
//     if  (is_shop_open) {
//       setTimeout(() => {
//         resolve( work() )
//       },time)
//     }
//     else {
//       reject(console.log("sorry our shop is closed"))
//     }
//   })
// }

// order (2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
// .then(() => {
//   return order(0000,()=>console.log("production has started"))
// })
// .then(()=>{
//   return order(2000,()=>console.log("the fruit was chopped"))
// })
// .then(()=>{
//   return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
// })
// .then(()=>{
//   return order(1000,()=>console.log("start the machine"))
// })
// .then(()=>{
//   return order(2000,()=>console.log(`icecream was placed on ${stocks.holder[0]}`))
// })
// .then(()=>{
//   return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
// })
// .then(()=>{
//   return order(1000,()=> console.log("ice cream was served"))
// })
// .catch(()=>{
//   console.log("customer left")
// })
// .finally(()=>{
//   console.log("day ended shop is closed")
// })



// // Example 5 - async / await - basic example
// let stocks = {
//   Fruits : ["strawberry","grapes","banana","apple"],
//   liquid : ["water","ice"],
//   holder : ["cone","cup","stick"],
//   toppings : ["chocolate","peanuts"]
// }

// let is_shop_open = true

// let toppings_choice = () => {
//   return new Promise( (resolve,reject)=> {
//     setTimeout( ()=> {
//       resolve(
//         console.log("which topping would you love?")
//       )
//     },3000)
//   })
// }

// async function kitchen() {
//   console.log(" A ")
//   console.log(" B ")
//   console.log(" C ")
//   await toppings_choice()
//   console.log(" D ")
//   console.log(" E ")
// }

// kitchen()
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking others orders")



// // Example 6 - icecream example
let stocks = {
  Fruits : ["strawberry","grapes","banana","apple"],
  liquid : ["water","ice"],
  holder : ["cone","cup","stick"],
  toppings : ["chocolate","peanuts"]
}

let is_shop_open = true

function time(ms) {
  return new Promise( (resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve,ms)
    }
    else {
      reject(console.log("shop is closed"))
    }
  })
}

async function kitchen (){
  try{
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`)  
    await time(0000)
    console.log(`start the production`)  
    await time(2000)
    console.log(`cut the fruit`)  
    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)  
    await time(1000)
    console.log(`start the machine`)        
    await time(2000)
    console.log(`icecream placed on ${stocks.holder[0]}`)        
    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`)            
    await time(2000)
    console.log(`serve ice cream`)        
  }
  catch(error){
    console.log("customer left",error)
  }
  finally{
    console.log("day ended, shop is closed")
  }
}

kitchen()