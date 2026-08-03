const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { TodoModel } = require("./db");
const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo";

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`MongoDB connected successfully to ${MONGO_URI}`);
  })
  .catch((error) => {
    console.error(`MongoDB connection error for ${MONGO_URI}:`, error);
    console.error(
      "If you intended to use Atlas, ensure your MONGO_URI is correct, your network allows DNS SRV lookups, and your cluster is reachable.",
    );
  });

app.get("/todo", (req, res) => {
  res.json({
    msg: "get request received on /todo endpoint",
  });
});

app.post("/todo", async (req, res) => {
  const { title, description, isDone } = req.body;

  console.log("data from frontend", title, description, isDone);

  try {
    const todo = await TodoModel.create({
      title,
      description,
      isDone,
    });

    res.status(201).json({
      msg: "todo added",
      todo,
    });
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({
      error: "Unable to save todo",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
