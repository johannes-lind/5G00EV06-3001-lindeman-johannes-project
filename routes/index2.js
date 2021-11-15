const express = require("express");
const router = express.Router();
const needle = require("needle");
const url = require("url");

const API_BASE_URL2 = process.env.API_BASE_URL2;
const API_KEY_VALUE2 = process.env.API_KEY_VALUE2;

router.get("/", async (req, res) => {
  try {
    console.log(API_KEY_VALUE2);
    const params = new URLSearchParams({
      ["t"]: "fences",
      API_KEY_VALUE2,
      ...url.parse(req.url, true).query,
    });
    const apiRes = await needle("get", `${API_BASE_URL2}?${params}`);
    const data = apiRes.body;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
