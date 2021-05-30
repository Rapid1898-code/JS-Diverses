const {format} = require("date-fns")

console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'))
console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))
console.log(typeof(format(new Date(2014, 1, 11), 'yyyy-MM-dd')))
