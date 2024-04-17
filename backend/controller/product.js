import mongoose from "mongoose";
import Questions from "../Model/product.js";
export const getAllProducts = async (req, res) => {
    try {
      const productList = await Products.find().sort({ askedOn: -1 });
      res.status(200).json(productList);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const deleteProduct = async (req, res) => {
    const { id: _id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("product unavailable...");
    }
  
    try {
      await Products.findByIdAndRemove(_id);
      res.status(200).json({ message: "successfully deleted..." });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };