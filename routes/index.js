const express = require("express");
const router = express.Router();
const signUpRouter = require("./signup");
const authRouter = require("./auth");

/* GET home page. */

function isAuthenticated(req, res, next) {
  if (req.session.userId) next();
  else res.render("index");
}

router.get("/", isAuthenticated, function (req, res, next) {
  res.render("index", {
    user: req.session.userId,
  });
});

router.use("/", authRouter);

router.use("/signup", signUpRouter);

module.exports = router;
