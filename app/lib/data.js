import { find, findById } from "../models/mongo";

// Función para obtener todos los productos
export async function getAllProducts() {
  try {
    const products = await find({});
    return products;
  } catch (error) {
    throw new Error("Error al obtener los productos: " + error);
  }
}

// Función para obtener un producto por su ID
export async function getProductById(productId) {
  try {
    const product = await findById(productId);
    return product;
  } catch (error) {
    throw new Error("Error al obtener el producto");
  }
}
