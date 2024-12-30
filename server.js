require("dotenv").config();
const express = require("express");
const exerciseRoutes = require("./routes/exercises");
const PORT = process.env.PORT;
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  next();
});

//workout routes
app.use("/api/exercises", exerciseRoutes);

//connect to db
//MONGO_URI=mongodb+srv://admin:F5zAkXd85_wWPB2@cluster0.uhqeu.mongodb.net/fitnessDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log("error ", error));
