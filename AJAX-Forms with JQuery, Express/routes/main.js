const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.post("/formWork", postsController.checkForm);
router.get("/", postsController.initialize);

module.exports = router;