import mongoose from "mongoose";
import connectDB from "./mongodb/mongodb.js";
import Product from "./mongodb/schemas.js";

// Funciones para interactuar con la base de datos
async function find() {
  try {
    await connectDB();
    return await Product.find({}, { _id: 0, id: 0, __v: 0, tags: 0 }).lean();
  } catch (error) {
    throw new Error("Error al obtener los productos: " + error);
  }
}

async function findById(productId) {
  try {
    await connectDB();
    return await Product.findById(productId, { _id: 0, id: 0, __v: 0 }).lean();
  } catch (error) {
    throw new Error("Error al obtener el producto");
  }
}

export { find, findById };
