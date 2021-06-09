const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.listen(2121, () => {
  console.log("Server is running on port 2121...");
});