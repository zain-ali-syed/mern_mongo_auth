// controllers/documentController.js
//controllers are the functions which use our definedßß Models to communicate to the database

const validateObjectId = require("../utils/validateObjectId");

const getAllDocuments = async (req, res, model) => {
  const documents = await model.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
  res.status(200).json(documents);
};

const getDocumentById = async (req, res, model) => {
  const id = req.params.id;

  if (!validateObjectId(id)) {
    return res.status(404).json({ error: "No such id" });
  }

  const document = await model.findById(id);
  if (!document) return res.status(404).json({ error: "No such document" });

  res.status(200).json(document);
};

const deleteDocumentById = async (req, res, model) => {
  const id = req.params.id;

  if (!validateObjectId(id)) {
    return res.status(404).json({ error: "No such id" });
  }

  const document = await model.findByIdAndDelete(id);
  if (!document) return res.status(404).json({ error: "No such document" });

  res.status(200).json(document);
};

const updateDocumentById = async (req, res, model) => {
  const id = req.params.id;

  if (!validateObjectId(id)) {
    return res.status(404).json({ error: "No such id" });
  }

  const document = await model.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!document) return res.status(404).json({ error: "No such document" });

  res.status(200).json(document);
};

const addDocument = async (req, res, model) => {
  const { title, load, reps } = req.body;
  const errorFields = [];
  if (!title) errorFields.push("Please fill in title");
  if (!load) errorFields.push("Please fill in load");
  if (!reps) errorFields.push("Please fill in reps");

  if (errorFields.length > 0) {
    console.log("send back ", errorFields);
    return res.status(400).json({ error: "Please fill in all the fields", errorFields });
  }

  const document = await model.create(req.body); // Assume the model accepts a body
  res.status(200).json(document);
};

module.exports = {
  getAllDocuments,
  getDocumentById,
  deleteDocumentById,
  updateDocumentById,
  addDocument,
};
