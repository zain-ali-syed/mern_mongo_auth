const mongoose = require("mongoose");

// Define the schema for the Exercise model
//this definnes how the 'rows' of the table look
//and we use this model to interact with the database
//it makes sure we stick to the below schema
//for each table we create a MODEL in the models folder which represents
//the document structure a collection can hold

const exerciseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Removes leading and trailing spaces
    },
    reps: {
      type: Number,
      required: true,
      min: [0, "Reps must be a positive number"], // Add validation
    },
    load: {
      type: Number,
      required: true,
      min: [0, "Load must be a positive number"], // Add validation
    },
  },
  {
    timestamps: true, // Automatically manage `createdAt` and `updatedAt` fields
  }
);

// Export the Exercise model
//when we try to insert the document it will create the table if it doesnt exist
//by pluraising "Exercise" below and making it lowercase
module.exports = mongoose.model("Exercise", exerciseSchema);
