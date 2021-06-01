const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

console.log("Drinnen! - routes.js")

router.post("/formWork", postsController.checkForm);
router.get("/", postsController.initialize);

module.exports = router;