const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.get("/", postsController.initialize);
router.post("/adduser", postsController.checkForm);

module.exports = router;