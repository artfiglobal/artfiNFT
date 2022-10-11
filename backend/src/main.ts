import express from "express";

import cors from "cors";

import fs from "fs";
import path from "path";
import http from "http";
import https from "https";
import whitelistRoutes from "./routes/whitelistRoutes";
import nftRoutes from "./routes/nftRoutes";
import * as basicAuth from "express-basic-auth";

// const privateKey = fs.readFileSync('/etc/letsencrypt/live/artfi.world/privkey.pem');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/artfi.world/fullchain.pem');
// // const chain  = fs.readFileSync('/etc/letsencrypt/live/artfi.world/fullchain.pem');

// const credentials = { key: privateKey, cert: certificate };

// import { errorHandler } from './middleware/errorMiddleware'

import connectDB from "./config/db";

const port = process.env.PORT || 8000;
const databaseURL = process.env.MONGO_URI;

connectDB(databaseURL).then((res) => {
  console.log(res);
});

const app = express();
app.use(express.static(__dirname + "/static", { dotfiles: "allow" }));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(
  "/api/whitelist",
  // basicAuth.default({
  //   users: { admin: "aRt3717fi" },
  //   challenge: true,
  // }),
  whitelistRoutes
);
app.use("/api/nft", nftRoutes);

app.get("/", (_req, res) => res.send("OK"));

// app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use((req, res, next) => {
  const error = new Error(
    "Route Not Found, Check Your Requested URL and Request Type"
  );
  // error.status = 404;
  res.json({
    error: {
      message: error.message,
    },
  });
});

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
// httpsServer.listen(8443, () => {
//   console.log("SSL PORT on 8443")
// });

console.log(1234);
