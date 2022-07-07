const express = require("express");
const router = express.Router();
const signUpRouter = require("./signup");
const authRouter = require("./auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/signin", function (req, res, next) {
  res.render("signin");
});

router.use("/signup", signUpRouter);

router.use("/auth", authRouter);

module.exports = router;
