var express = require("express");
var router = express.Router();
var signUpRouter = require("./signup");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/signin", function (req, res, next) {
  res.render("signin");
});

router.use("/signup", signUpRouter);

module.exports = router;
