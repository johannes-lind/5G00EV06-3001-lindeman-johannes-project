const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(express.static("public"));

// hiding api keys
app.use("/api1", require("./routes/index1"));
app.use("/api2", require("./routes/index2"));
app.use("/api3", require("./routes/index3"));
app.use(cors());

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
