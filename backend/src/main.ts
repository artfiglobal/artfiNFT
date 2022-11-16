import express from "express";
import cors from "cors";
import http from "http";

import nftRoutes from "./routes/nftRoutes";
import waitlistRoutes from './routes/waitlistRoute';
import whitelistRoutes from "./routes/whitelistRoutes";

import connectDB from "./config/db";

const port = process.env.PORT || 8000;
const databaseURL = process.env.MONGO_URI || "";

connectDB(databaseURL).then((res) => {
  console.log(res);
});

const app = express();
app.use(express.static(__dirname + "/static", { dotfiles: "allow" }));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/nft", nftRoutes);
app.use("/waitlist", waitlistRoutes);
app.use("/whitelist", whitelistRoutes);

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

http.createServer(app).listen(8080);
