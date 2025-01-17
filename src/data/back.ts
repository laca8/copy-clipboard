const data = [
  {
    title: "Start by creating a new Node.js project",
    feature: "Node",
    desc: "npm init -y",
  },
  {
    title: "Install from node package manager",
    feature: "Node",
    desc: "npm install express mongoose jsonwebtoken bcryptjs dotenv cors",
  },
  {
    title: "Install from node package manager",
    feature: "Node",
    desc: "npm install nodemon --dev",
  },
  {
    title: ".env file",
    feature: "Node",
    desc: `DBURL=mongodb+srv://ahmed:VernA2525@cluster0.2qrrr0b.mongodb.net/{dbName}?retryWrites=true&w=majority 
PORT=5000
JWT_SECRET_KEY=hekajihuvjgjuwh1y717t1ghbvxvbxjshxgvhsbxjhbnhb
EXPIRE_TIME=3d
NODE_ENV=dev`,
  },

  {
    title: "Mongodb file",
    feature: "Node",
    desc: `
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config("../.env");
const db = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = db;
    `,
  },
  {
    title: "Mysql file",
    feature: "Node",
    desc: `
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3308,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
pool.getConnection(function (error) {
  if (error) {
    console.log(error);
  } else {
    // pool.query("CREATE DATABASE mydb", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });
    console.log("Connected");
  }
});
module.exports = pool;

    `,
  },
  {
    title: "server.js file",
    feature: "Node",
    desc: `
const express = require('express')
const path = require("path");
const db = require("./config/db");

const dotenv = require("dotenv");
const cors = require("cors");
const globalError = require("./middleware/errorHandler");
const ApiError = require("./utils/ApiError");
const app = express();
db();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/uploads", express.static("uploads"));
//routes

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
app.use("*", (req, res, next) => {
  next(new ApiError("this route not found", 404));
});
app.use(globalError);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server running at 5000.....");
});


    `,
  },
  {
    title: "/middlewares/errorHandler.js file",
    feature: "Node",
    desc: `
const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV == "development") {
    sendErrorForDev(err, res);
  } else {
    sendErrorForPro(err, res);
  }
};

const sendErrorForDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorForPro = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
module.exports = globalError;

    `,
  },
  {
    title: "/utils/ApiError.js file",
    feature: "Node",
    desc: `
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = {statusCode}.startsWith(4) ? "fail" : "error";
    this.isOperational = true;
  }
}
module.exports = ApiError;

    `,
  },
];
export default data;
