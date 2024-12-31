// Import Mongoose
const mongoose = require('mongoose');

// MongoDB Connection URI (replace with your own)
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

// Define a Mongoose Schema
const recordSchema = new mongoose.Schema({
  field1: String,
  field2: String,
});

// Create a Model based on the schema
const Record = mongoose.model('Record', recordSchema);

// GET All Records
function getAllRecords() {
  Record.find()
    .then(records => {
      console.log('All Records:', records);
    })
    .catch(err => {
      console.error('Error retrieving records:', err);
    });
}

// GET a Specific Record by ID
function getRecordById(id) {
  Record.findById(id)
    .then(record => {
      if (!record) {
        console.log('Record not found');
      } else {
        console.log('Record found:', record);
      }
    })
    .catch(err => {
      console.error('Error finding record:', err);
    });
}

// CREATE a New Record (POST)
function createRecord() {
  const newRecord = new Record({
    field1: 'Sample Value 1',
    field2: 'Sample Value 2',
  });

  newRecord.save()
    .then(savedRecord => {
      console.log('Record created:', savedRecord);
    })
    .catch(err => {
      console.error('Error creating record:', err);
    });
}

// UPDATE a Record by ID (PUT)
function updateRecordById(id) {
  Record.findByIdAndUpdate(id, { field1: 'Updated Value' }, { new: true })
    .then(updatedRecord => {
      console.log('Updated record:', updatedRecord);
    })
    .catch(err => {
      console.error('Error updating record:', err);
    });
}

// DELETE a Record by ID
function deleteRecordById(id) {
  Record.findByIdAndDelete(id)
    .then(deletedRecord => {
      if (!deletedRecord) {
        console.log('Record not found');
      } else {
        console.log('Deleted record:', deletedRecord);
      }
    })
    .catch(err => {
      console.error('Error deleting record:', err);
    });
}

// Example Usage:

// Call functions below to test them

// 1. Get All Records
// getAllRecords();

// 2. Get a Record by ID (replace 'YOUR_RECORD_ID' with an actual ObjectId)
// getRecordById('YOUR_RECORD_ID');

// 3. Create a new Record
// createRecord();

// 4. Update a Record by ID (replace 'YOUR_RECORD_ID' with an actual ObjectId)
// updateRecordById('YOUR_RECORD_ID');

// 5. Delete a Record by ID (replace 'YOUR_RECORD_ID' with an actual ObjectId)
// deleteRecordById('YOUR_RECORD_ID');

