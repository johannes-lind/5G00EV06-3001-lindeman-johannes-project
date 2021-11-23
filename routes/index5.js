const express = require("express");
const router = express.Router();
const needle = require("needle");
const url = require("url");

const API_BASE_URL5 = process.env.API_BASE_URL5;
const API_KEY_VALUE2 = process.env.API_KEY_VALUE2;

router.get("/", async (req, res) => {
  try {
    const params = new URLSearchParams({
      API_KEY_VALUE2,
      ...url.parse(req.url, true).query,
    });
    const apiRes = await needle("get", `${API_BASE_URL5}${API_KEY_VALUE2}`);
    const data = apiRes.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
