const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// for developing:

/*
app.use(express.static("frontend/myapp/build"));

app.use("/find", require("./routes/index1"));
app.use("/upcoming", require("./routes/index2"));
app.use("/popular", require("./routes/index3"));
app.use("/top", require("./routes/index4"));
app.use("/topTV", require("./routes/index5"));
app.use("/popularTV", require("./routes/index6"));
app.use(cors());

// React Router does not work on refresh with Heroku, though it works fine locally
// To fix this we need to do the following:
// redirect all server requests to index.html
// any request that is made to server will respond with index page and then fetch any js resources needed
// then react router will load the appropriate view
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
*/

// for publishing

app.use(express.static("public"));

// hiding api keys
app.use("/find", require("./routes/index1"));
app.use("/upcoming", require("./routes/index2"));
app.use("/popular", require("./routes/index3"));
app.use("/top", require("./routes/index4"));
app.use("/topTV", require("./routes/index5"));
app.use("/popularTV", require("./routes/index6"));
app.use(cors());

// React Router does not work on refresh with Heroku, though it works fine locally
// To fix this we need to do the following:
// redirect all server requests to index.html
// any request that is made to server will respond with index page and then fetch any js resources needed
// then react router will load the appropriate view

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
