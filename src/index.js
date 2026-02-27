import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import publicationsRoutes from "./api/v1/publications/publicationsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ ADD THIS ROUTE ⭐
app.get("/", (req, res) => {
  res.send("BookQubit Server is running...");
});

// API V1 Routes
app.use("/api/v1/publications", publicationsRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});