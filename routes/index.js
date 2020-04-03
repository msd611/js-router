const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/jetman-mock", (req, res) => {
  return res.sendFile(path.join(process.cwd(), "views", "mocksever.html"));
});

router.use("/docs", require("./docs"));

router.use((req, res) => {
  return res.sendStatus(404);
});

module.exports = router;
