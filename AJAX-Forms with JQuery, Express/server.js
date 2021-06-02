const express = require("express");
const app = express();
const PORT = 2121;
const checkForms = require("./routes/main");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Folder
app.use(express.static("public"));

app.use("/post", checkForms);
app.use("/", checkForms);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});