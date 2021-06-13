const express = require("express");
const app = express();
app.use(express.static('data'))
app.listen(2121, () => {
  console.log("Server is running on port 2121...");
});