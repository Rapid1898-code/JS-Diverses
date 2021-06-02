const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000;
const bodyParser = require('body-parser')
const checkForms = require("./routes/main");

//Static Folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/adduser", checkForms);
app.use("/", checkForms);

// app.get('/', (req, res)=>{
//     res.sendFile( __dirname + "/" + "main.html" );
//  })
// app.post('/addUser', (req, res) => {
//   const user = {
//     name: req.body.name,
//     email: req.body.email,
//     mobile: req.body.mobile
//   }
//   console.log(user)
//   res.send(user)
// })

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});