import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    default: "Fitness"
  },

  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  },

  rating: {
    type: Number,
    default: 4.5
  },

  reviews: {
    type: Number,
    default: 100
  }

},
{
  timestamps: true
});

const Product = mongoose.model(
  "Product",
  ProductSchema
);

export default Product;