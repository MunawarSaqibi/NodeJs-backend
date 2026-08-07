const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

const JWT_SECRET = "I Love Mandi";

let users = [];
app.use(express.json());
app.use(cors());

const authMiddileware = (req, res, next) => {
  const { token } = req.headers;
  const jwtPayload = jwt.verify(token, JWT_SECRET);

  if (jwtPayload == undefined) {
    res.json({
      msg: "invalid credientials/ You are not allowed to access this data",
    });
  }

  req.transferData = jwtPayload;
  next();
};
app.post("/signup", (req, res) => {
  const { username, password, email } = req.body;

  const newUserObj = {
    username,
    password,
    email,
  };
  users.push(newUserObj);
  console.log("current db status", users);

  res.json({
    msg: "User registered successfully",
    data: newUserObj,
  });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find((userObj) => {
    if (userObj.email == email && userObj.password == password) {
      return true;
    }
  });

  if (foundUser == undefined) {
    res.json({
      msg: "Inavlid login details or User Not Found",
    });
  } else {
    const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);
    res.json({
      msg: "login Successfull",
      token: token,
    });
  }
});

app.use(authMiddileware);

app.get("/me", (req, res) => {
  const jwtPayload = req.transferData;

  const verifiedUserData = users.find((userObj) => {
    if (userObj.username === jwtPayload.username) {
      return true;
    }
  });

  res.json({
    msg: "you are eligible to get data",
    data: verifiedUserData,
  });
});

app.get("/info", (req, res) => {
  res.json({
    msg: "AuthMiddleWare is used",
  });
});

app.listen("8080", () => {
  console.log("server is listening at port 8080");
});
