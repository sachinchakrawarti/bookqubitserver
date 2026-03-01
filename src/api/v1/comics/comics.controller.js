import { ComicsData } from "../../../data/comics/ComicsData.js";

// GET ALL COMICS
export const getAllComics = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      total: ComicsData.length,
      data: ComicsData,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// GET COMIC BY ID
export const getComicById = (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    const comic = ComicsData.find((item) => item.id === id);

    if (!comic) {
      return res.status(404).json({
        success: false,
        message: "Comic not found",
      });
    }

    res.status(200).json({ success: true, data: comic });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// CATEGORY FILTER
export const getComicsByCategory = (req, res) => {
  try {
    const { category } = req.params;

    const filtered = ComicsData.filter((comic) =>
      comic.category.toLowerCase().includes(category.toLowerCase())
    );

    res.status(200).json({
      success: true,
      total: filtered.length,
      data: filtered,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// PUBLISHER FILTER
export const getComicsByPublisher = (req, res) => {
  try {
    const { publisher } = req.params;

    const filtered = ComicsData.filter((comic) =>
      comic.publisher.toLowerCase().includes(publisher.toLowerCase())
    );

    res.status(200).json({
      success: true,
      total: filtered.length,
      data: filtered,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};