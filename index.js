import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const DEFAULT_PORT = 3000;
import morgan from "morgan";
//Used to read file path w.r.t the computer (server or local)
//.use is used for mounting the middleware
const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(morgan("tiny"))
/**
 * 1. The get method here sends the form to display on th screen
 */
app.get("/", (req, res) => {
  //Send File is used to send file
  res.sendFile(`${__dirname}/public/index.html`);
});
/**
 * 1. The post method
 */

app.use(bodyParser.urlencoded({ extended: true }));
// app.post("/submit", (req, res) => {
//   console.log(req.body);
// });

app.listen(DEFAULT_PORT, () => {
  console.log(`Server running on ${DEFAULT_PORT}`);
});
