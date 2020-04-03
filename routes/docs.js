const express = require("express");
const router = express.Router();
const path = require("path");

const PARTIALS = path.join(process.cwd(), "public", "partials");

const routes = ["a", "b", "c"];

router.get("/", (req, res) => {
  return res.redirect("/docs.html");
});

router.get("/*", (req, res) => {
  const __path = req.path.includes("docs")
    ? req.path.substring(6, req.path.length)
    : req.path.substring(1, req.path.length);
  console.log("__path: ", __path);

  const route = routes.filter(r => r === __path)[0];
  if (!route) return res.sendStatus(404);
  else {
    if (req.headers.partial) {
      // console.log("partial");
      return res.status(200).sendFile(path.join(PARTIALS, __path + ".html"));
    } else {
      // console.log("no partial");
      return res
        .status(206)
        .sendFile(path.join(process.cwd(), "public", "docs.html"));
    }
  }
});

module.exports = router;
