import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import Product from "./models/Product.js";
import User from "./models/User.js";

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {

  res.send("Backend Running");

});

app.post("/signup", async (req, res) => {

  try {

    const existingUser = await User.findOne({
      email: req.body.email
    });

    if (existingUser) {

      return res.status(400).json({
  message: "User already exists"
});

    }

    const user = new User({

      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      referral: req.body.referral

    });

    await user.save();

    res.json({
  message: "Signup Successful"
});

  } catch (error) {

    res.status(500).json(error);

  }

});
app.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {

      return res.status(400).json({
        message: "Email not registered"
      });

    }

    if (user.password !== req.body.password) {

      return res.status(400).json({
        message: "Incorrect password"
      });

    }

    res.json({

      message: "Login Successful",

      role: user.role

    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.post("/add-product", async (req, res) => {

  try {

    const product = new Product({
  name: req.body.name,
  price: req.body.price,
  category: req.body.category,
  image: req.body.image,
  imageFit: req.body.imageFit,
  imagePosition: req.body.imagePosition
});

    await product.save();

    res.send("Product Added Successfully");

  } catch (error) {

    res.status(500).json(error);

  }

});

app.get("/products", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json(error);

  }

});

app.delete("/delete-product/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.send("Product Deleted Successfully");

  } catch (error) {

    res.status(500).json(error);

  }

});

app.put("/update-product/:id", async (req, res) => {

  try {

    await Product.findByIdAndUpdate(req.params.id, {

  name: req.body.name,
  price: req.body.price,
  category: req.body.category,
  image: req.body.image,
  imageFit: req.body.imageFit,
  imagePosition: req.body.imagePosition

});

    res.send("Product Updated Successfully");

  } catch (error) {

    res.status(500).json(error);

  }

});

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});