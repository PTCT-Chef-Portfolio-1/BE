const router = require("express").Router();
const usersModel = require("../users/users-model");
const generateToken = require("./generateToken");
const bcrypt = require("bcryptjs");

// PASSING AN errorMESSAGE SO I DON"T HAVE TO RE-WRITE IT.
const errorMessage = {
  message: "Include a valid email/password in your request"
};

router.post("/register", async (req, res, next) => {
  try {
    const user = req.body;

    if (!user || !user.username || !user.password) {
      return res.status(401).json(errorMessage);
    }

    const saved = await usersModel.add(user);
    res.status(201).json(saved);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findBy({ email }).first();

    const validPassword = await bcrypt.compare(password, user.password);

    if (user && validPassword) {
      const token = generateToken(user);
      console.log(token);

      res.status(200).json({
        token,
        message: `welcome chef ${user.firstName}: ${user.lastName}!`
      });
    } else {
      return res.status(418).json(errorMessage);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
