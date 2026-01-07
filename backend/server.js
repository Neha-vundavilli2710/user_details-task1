const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB local connection (Compass)
mongoose.connect("mongodb://localhost:27017/userdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// POST – Add user
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  res.json(await user.save());
});

// GET – All users
app.get("/users", async (req, res) => {
  res.json(await User.find());
});

// GET ONE – For update page
app.get("/users/:id", async (req, res) => {
  res.json(await User.findById(req.params.id));
});

// PUT – Update user
app.put("/users/:id", async (req, res) => {
  res.json(
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

// DELETE – Delete user
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
