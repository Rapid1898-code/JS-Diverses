const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('data'));
app.listen(2121, () => {
  console.log("Server is running on port 2121...");
});