require("dotenv").config();

const cors = require("cors");
const express = require("express");

const app = express();
const PORT = 80;

app.listen(PORT, () => console.log(`http server is runnning on ${PORT}`));