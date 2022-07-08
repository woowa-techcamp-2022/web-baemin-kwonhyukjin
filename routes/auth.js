const express = require("express");
const db = require("../db/config");
const router = express.Router();
const crypto = require("crypto");

/* GET home page. */

const encrpyt = (password) =>
  crypto.createHash("sha512").update(password).digest("base64");

router.get("/signin", function (req, res, next) {
  res.render("signin");
});

router.post("/signup", function (req, res, next) {
  const { email, password } = req.body;
  db.get("users")
    .push({
      email,
      password: encrpyt(password),
    })
    .write();

  res.redirect("/signin");
});

router.post("/signin", function (req, res, next) {
  const { email, password } = req.body;
  const targetUser = db.get("users").find({ email }).value();
  if (!targetUser) res.render("signin", { error: "아이디가 없어요." });

  if (encrpyt(password) === targetUser.password) {
    req.session.regenerate(function (err) {
      if (err) next(err);

      req.session.userId = email;
      req.session.save(function (err) {
        if (err) return next(err);
        res.redirect("/");
      });
    });
  } else {
    res.render("signin", { error: "비밀번호가 일치하지 않아요." });
  }
});

router.post("/logout", function (req, res, next) {
  req.session.destroy();
  res.redirect("/signin");
});

module.exports = router;
