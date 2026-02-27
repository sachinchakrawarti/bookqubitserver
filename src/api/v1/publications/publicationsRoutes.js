// src/api/v1/publications/publicationsRoutes.js

import express from "express";
import {
  getPublications,
  getPublicationById,
  getPublicationBySlug
} from "./publicationsController.js";

const router = express.Router();

// Routes
router.get("/", getPublications);
router.get("/id/:id", getPublicationById);
router.get("/slug/:slug", getPublicationBySlug);

export default router;