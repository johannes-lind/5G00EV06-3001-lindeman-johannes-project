const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
//app.use(express.static("public"));

//app.get("/", (req, res) => {
//  res.send("Hello world");
//});

app.get("/Search", (req, res) => {
  res.sendFile(path.join("public/index.html"));
});
app.get("/HomePage", (req, res) => {
  res.sendFile(path.join("public/index.html"));
});

/*app.get("/*", function (req, res) {
  res.sendFile(path.join("__dirname", "/public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
*/
app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
