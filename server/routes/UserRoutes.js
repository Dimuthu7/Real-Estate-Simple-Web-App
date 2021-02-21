const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../model/UserModel");

router.post("/register", async (req, res) => {
  // Check email is already used
  const emailExist = await UserModel.findOne({ userEmail: req.body.email });
  if (emailExist) return res.status(404).send("Email is already registered!");

  // Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const user = new UserModel({
    userName: req.body.username,
    userAddress: req.body.address,
    userEmail: req.body.email,
    userMobile: req.body.mobile,
    userPassword: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  // Check email is already used
  const user = await UserModel.findOne({ userEmail: req.body.email });
  if (!user) return res.status(404).send("Email or password is wrong!");

  // Check password
  const validPassword = await bcrypt.compare(
    req.body.password,
    user.userPassword
  );

  if (!validPassword)
    return res.status(404).send("Email or password is wrong!");

  const userObj = {
    userName: user.userName,
    userEmail: user.userEmail,
    userMobile: user.userMobile,
    userAddress: user.userAddress,
  };

  res.send(userObj);
});

module.exports = router;
