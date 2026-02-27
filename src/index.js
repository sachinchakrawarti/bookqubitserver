// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors()); // <-- IMPORTANT
// app.use(express.json());

// // API routes
// app.use("/api/v1/books", require("./api/v1/books.routes"));

// app.get("/", (req, res) => {
//   res.send("Server OK");
// });

// const PORT = process.env.PORT || 3005;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




// index.js
// import express from "express";
// import dotenv from "dotenv";
// import pool from "./config/db.js"; // <- use .js extension
// import booksRouter from "./api/v1/books.routes.js";
// import otpRouter from "./api/v1/auth/routes/otp.routes.js";

// dotenv.config(); // <- same as require("dotenv").config();

// const app = express();

// app.use(express.json());
// app.use("/api/v1/books", booksRouter);
// app.use("/api/v1/auth/otp", otpRouter);

// const PORT = process.env.PORT || 3005;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
// ──────────────────────────────────────────────
// src/index.js
// ──────────────────────────────────────────────

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import publicationsRoutes from "./api/v1/publications/publicationsRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());

// Mounting
// API V1 Routes
app.use("/api/v1/publications", publicationsRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});