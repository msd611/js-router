const express = require("express");
const path = require("path");
let app = express();

const PORT = process.env.PORT || 1234;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
