const express = require("express");
const app = express();
// const cors = require('cors')

app.use(express.static('data'))
// app.use(cors(builder => builder
//   .AllowAnyOrigin()
//   .AllowAnyMethod()
//   .AllowAnyHeader()
// ))

app.listen(2121, () => {
  console.log("Server is running on port 2121...");
});