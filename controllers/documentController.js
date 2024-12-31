// controllers/documentController.js
const validateObjectId = require('../utils/validateObjectId');

const getAllDocuments = async (req, res, model) => {
    const documents = await model.find();
    res.status(200).json(documents);
}

const getDocumentById = async (req, res, model) => {
    const id = req.params.id;
    
    if (!validateObjectId(id)) { 
      return res.status(404).json({ error: 'No such id' });
    }
    
    const document = await model.findById(id);
    if (!document) return res.status(404).json({ error: 'No such document' });

    res.status(200).json(document);
}

const deleteDocumentById = async (req, res, model) => {
    const id = req.params.id;

    if (!validateObjectId(id)) { 
      return res.status(404).json({ error: 'No such id' });
    }

    const document = await model.findByIdAndDelete(id);
    if (!document) return res.status(404).json({ error: 'No such document' });

    res.status(200).json(document);
}

const updateDocumentById = async (req, res, model) => {
    const id = req.params.id;

    if (!validateObjectId(id)) { 
      return res.status(404).json({ error: 'No such id' });
    }

    const document = await model.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!document) return res.status(404).json({ error: 'No such document' });

    res.status(200).json(document);
}

const addDocument = async (req, res, model) => {
    try {
        const document = await model.create(req.body);  // Assume the model accepts a body
        res.status(200).json(document);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getAllDocuments, getDocumentById, deleteDocumentById, updateDocumentById, addDocument };
