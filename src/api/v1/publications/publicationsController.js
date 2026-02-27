// src/api/v1/publications/publicationsController.js

import publicationsData from "../../../data/publications/PublicationsData.js";

// GET all publications
export const getPublications = (req, res) => {
  res.status(200).json({
    success: true,
    count: publicationsData.length,
    data: publicationsData
  });
};

// GET publication by ID
export const getPublicationById = (req, res) => {
  const { id } = req.params;
  const publication = publicationsData.find(pub => pub.id === parseInt(id));

  if (!publication) {
    return res.status(404).json({
      success: false,
      message: "Publication not found"
    });
  }

  res.status(200).json({
    success: true,
    data: publication
  });
};

// GET publication by slug
export const getPublicationBySlug = (req, res) => {
  const { slug } = req.params;
  const publication = publicationsData.find(pub => pub.slug === slug);

  if (!publication) {
    return res.status(404).json({
      success: false,
      message: "Publication not found"
    });
  }

  res.status(200).json({
    success: true,
    data: publication
  });
};