const mongoose = require("mongoose");
const Product = require("../models/Product");

const sampleProducts = [
  {
    name: "Men's Casual Shirt",
    description: "Comfortable and stylish men's casual shirt.",
    price: 19.99,
    category: "men",
    brand: "nike",
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750784363/M_NSW_TEE_ICON_FUTURA_bic9uq.jpg",
    totalStock: 10,
  },
  {
    name: "Stylish Women's Dress",
    description: "Women 's stylish and elegant dress.",
    price: 29.99,
    category: "women",
    brand: "h&m",
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750785231/a7a51811-7969-4167-a5b4-7ca2b1f067d71584486487281-1_f5oq1d.jpg",
    totalStock: 5,
  },
  {
    name: "Best for Kids",
    description: "Kids casuals.",
    price: 15.99,
    category: "kids",
    brand: "puma",
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750785400/69d74c17d0baef2f0530f215d5466200_cq00cu.jpg",
    totalStock: 15,
  },
  {
    name: "Comfortable Shoes",
    description: "Good quality comfortable shoes.",
    price: 20.99,
    category: "footwear",
    brand: "adidas",
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750784271/Adidas-Grand-Court-Superstars-1-1_o1jnm4.jpg",
    totalStock: 25,
  },
  {
    name: "Stylish Rings",
    description: "Simple and elegant rings for men and women.",
    price: 13.99,
    category: "accessories",
    brand: "zara",
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750785506/image_dvlx14.jpg",
    totalStock: 5,
  },
];

async function seedProducts() {
  try {
    await mongoose.connect(
      "mongodb+srv://sravya:1234567890@cluster0.a3txtjj.mongodb.net/"
    );
    console.log("MongoDB connected for seeding");

    await Product.deleteMany({});
    console.log("Existing products deleted");

    await Product.insertMany(sampleProducts);
    console.log("Sample products inserted");

    mongoose.disconnect();
    console.log("MongoDB disconnected after seeding");
  } catch (error) {
    console.error("Error seeding products:", error);
  }
}

seedProducts();

