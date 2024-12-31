const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");
const { getAllDocuments, addDocument, getDocumentById, deleteDocumentById, updateDocumentById} = require('../controllers/documentController')

router.get("/", (req, res) => getAllDocuments(req, res, Exercise));
router.post("/", (req, res) => addDocument(req, res, Exercise));
router.get("/:id", (req, res) => getDocumentById(req, res, Exercise));
router.delete("/:id", (req, res) => deleteDocumentById(req, res, Exercise));
router.put("/:id", (req, res) => updateDocumentById(req, res, Exercise));

module.exports = router;
