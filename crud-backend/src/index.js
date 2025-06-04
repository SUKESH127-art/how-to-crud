/** @format */

import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the CRUD Backend</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//46.5; https://www.youtube.com/watch?v=gTD8b5Yxuuo
