import express from "express";
import {
  getAllComics,
  getComicById,
  getComicsByCategory,
  getComicsByPublisher
} from "./comics.controller.js";

const router = express.Router();

// Base route: /api/v1/comics
router.get("/", getAllComics);
router.get("/:id", getComicById);
router.get("/category/:category", getComicsByCategory);
router.get("/publisher/:publisher", getComicsByPublisher);

export default router;