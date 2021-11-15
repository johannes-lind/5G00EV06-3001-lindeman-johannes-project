const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(express.static("public"));
//app.use("/api1", require("./routes/index1"));
//app.use("/Search", require("./routes/index1"));
//app.use("/api2", require("./routes/index2"));
app.use(cors());

//app.use(express.static("public"));

//app.get("/", (req, res) => {
//  res.send("Hello world");
//});

/*app.get("/Search", (req, res) => {
  res.sendFile(path.join("public/index.html"));
});
app.get("/HomePage", (req, res) => {
  res.sendFile(path.join("public/index.html"));
});*/

// fix for routing problem

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
