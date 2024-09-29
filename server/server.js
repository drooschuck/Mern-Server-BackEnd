const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");
const cors = require("cors");



const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");
/*
const authMiddleware = require("./middlewares/authMiddleware") */

/* app.use("/api/users", authMiddleware, usersRoute);
app.use("/api/exams", authMiddleware, examsRoute);
app.use("/api/reports", authMiddleware, resportsRoute); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://mern-frontend-dn3i.onrender.com"],
  })
);

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute); 

const port = process.env.PORT || 5000;

/*const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client" , "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });   
} */


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
