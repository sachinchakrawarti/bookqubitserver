import express from "express";
import {
  getAllComics,
  getComicById,
  getComicsByCategory,
  getComicsByPublisher
} from "./comics.controller.js";

const router = express.Router();

// IMPORTANT: Specific routes FIRST
router.get("/", getAllComics);
router.get("/category/:category", getComicsByCategory);
router.get("/publisher/:publisher", getComicsByPublisher);

// Dynamic route LAST
router.get("/:id", getComicById);

export default router;