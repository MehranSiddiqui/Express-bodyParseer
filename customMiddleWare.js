import express from "express";
const PORT = 3000;

//Initialize Express
const app = express();
//CustomMiddleWare

const logger = (req, res, next) => {
  console.log("Method", req?.method);
  console.log("URL", req?.url);
  next();
};
app.use(logger);

app.get("/", (req, res) => {
  res.send("MIDDLEWARE");
});
app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
