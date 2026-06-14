const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
  {
    name: "Puma Velocity Nitro",
    category: "Running",
    price: 8999,
    discount: 25,
    rating: 4.8,
  },
  {
    name: "Puma Deviate Nitro",
    category: "Running",
    price: 10999,
    discount: 20,
    rating: 4.7,
  },
  {
    name: "Puma Liberate Nitro",
    category: "Running",
    price: 7499,
    discount: 15,
    rating: 4.6,
  },
  {
    name: "Puma RS-X",
    category: "Lifestyle",
    price: 7499,
    discount: 30,
    rating: 4.9,
  },
  {
    name: "Puma Future Rider",
    category: "Sneakers",
    price: 6999,
    discount: 18,
    rating: 4.5,
  },
  {
    name: "Puma Mirage Sport",
    category: "Sneakers",
    price: 6499,
    discount: 22,
    rating: 4.4,
  },
  {
    name: "Puma Softride Enzo",
    category: "Training",
    price: 5999,
    discount: 12,
    rating: 4.3,
  },
  {
    name: "Puma Fuse 2.0",
    category: "Training",
    price: 8299,
    discount: 15,
    rating: 4.6,
  },
  {
    name: "Puma Ultra Ultimate",
    category: "Football",
    price: 12999,
    discount: 10,
    rating: 4.9,
  },
  {
    name: "Puma Future Match",
    category: "Football",
    price: 9999,
    discount: 18,
    rating: 4.7,
  },
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Inserted");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

importData();