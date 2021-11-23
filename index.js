const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// for developing:
app.use(express.static("frontend/myapp/build"));

app.use("/find", require("./routes/index1"));
app.use("/upcoming", require("./routes/index2"));
app.use("/popular", require("./routes/index3"));
app.use("/top", require("./routes/index4"));
app.use("/topTV", require("./routes/index5"));
app.use("/popularTV", require("./routes/index6"));
app.use(cors());

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "/frontend/myapp/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// for publishing
/*
app.use(express.static("public"));

// hiding api keys
app.use("/find", require("./routes/index1"));
app.use("/upcoming", require("./routes/index2"));
app.use("/popular", require("./routes/index3"));
app.use("/top", require("./routes/index4"));
app.use(cors());

// fix for routing problem

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
*/
app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
