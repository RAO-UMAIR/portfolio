const express = require("express");
const dotenv = require("dotenv");
const contactRouter = require("./routes/ContactRoute");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

connectDB();

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is RUNNING...");
  });
}

app.use("/api/contacts", contactRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
