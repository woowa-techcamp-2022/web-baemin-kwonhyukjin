const express = require("express");
const db = require("../db/config");
const router = express.Router();
const crypto = require("crypto");

/* GET home page. */

const encrpyt = (password) =>
  crypto.createHash("sha512").update(password).digest("base64");

router.post("/signup", function (req, res, next) {
  const { email, password } = req.body;
  db.get("users")
    .push({
      email,
      password: encrpyt(password),
    })
    .write();

  res.send(200);
});

router.post("/signin", function (req, res, next) {
  const { email, password } = req.body;
  const targetUser = db.get("users").find({ email }).value();
  if (!targetUser) res.send(400);

  if (encrpyt(password) === targetUser.password) {
    res.send(200);

    /**
     * 세션 유지
     */
  } else res.send(401);
});

module.exports = router;
