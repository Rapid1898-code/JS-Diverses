const express = require("express");
const app = express();
const PORT = 2121;
const checkForms = require("./routes/main");

//Static Folder
app.use(express.static("public"));

console.log("Drinnen! - server.js")

app.use("/post", checkForms);
app.use("/", checkForms);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});