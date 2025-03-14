const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE CONNECTION SUCCESSFULL");
  } catch (err) {
    console.log(`DATABASE CONNECTION UNSUCCESFULL,:${err}`);
  }
};

module.exports = connectDB;
