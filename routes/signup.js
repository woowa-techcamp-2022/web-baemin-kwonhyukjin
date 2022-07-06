var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("404");
});

router.get("/terms", function (req, res, next) {
  res.render("terms");
});

router.get("/email", function (req, res, next) {
  res.render("email");
});

router.get("/phone", function (req, res, next) {
  res.render("phone");
});

module.exports = router;
