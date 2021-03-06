const express = require("express");
const router = express.Router();
const needle = require("needle");
const url = require("url");

// variables needed for the searchable url
const API_BASE_URL1 = process.env.API_BASE_URL1;
const API_KEY_NAME1 = process.env.API_KEY_NAME1;
const API_KEY_VALUE1 = process.env.API_KEY_VALUE1;
// the search itself
router.get("/", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME1]: API_KEY_VALUE1,
      ...url.parse(req.url, true).query,
    });
    const apiRes = await needle("get", `${API_BASE_URL1}?${params}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
