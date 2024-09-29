import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

//Initialize Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//CustomMiddleWare

// const logger = (req, res, next) => {
//   console.log("Method", req?.method);
//   console.log("URL", req?.url);
//   next();
// };
// app.use(logger);
let brandName = "";
const brandNameGenerator = (req, res, next) => {
    brandName = `The Name of your pet is ${req?.body?.street} ${req?.body?.pet}`;
  next();
};
app.use(brandNameGenerator);
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
app.post("/submit", (req, res) => {
  res.send(`<h1>${brandName}</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
