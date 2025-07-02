const mongoose = require("mongoose");
const Feature = require("../models/Feature");

const sampleFeatureImages = [
  {
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750759353/minimalist-mens-fashion-beige-shirt-and-trousers_wbxpsn.jpg",
  },
  {
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750759571/Fashion_iswxrx.jpg",
  },
  {
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750759691/childrens-fashion-beautiful-boy-girl-260nw-1066798286_lq03xm.jpg",
  },
  {
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750759848/model-career-kit-still-life_23-2150229753_ng2you.jpg",
  },
  {
    image: "https://res.cloudinary.com/doykimzpk/image/upload/v1750760095/friends-legs-and-shoes-on-city-steps-for-bonding-travel-and-urban-break-with-drinks-smoothie_ug0sxa.jpg",
  },
];

async function seedFeatureImages() {
  try {
    await mongoose.connect(
      "mongodb+srv://sravya:1234567890@cluster0.a3txtjj.mongodb.net/"
    );
    console.log("MongoDB connected for seeding feature images");

    await Feature.deleteMany({});
    console.log("Existing feature images deleted");

    await Feature.insertMany(sampleFeatureImages);
    console.log("Sample feature images inserted");

    mongoose.disconnect();
    console.log("MongoDB disconnected after seeding feature images");
  } catch (error) {
    console.error("Error seeding feature images:", error);
  }
}

seedFeatureImages();
