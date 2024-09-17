import { model, Schema, models } from "mongoose";
const productSchema = new Schema({
  nombre: String,
  descripcion: String,
  precioPorUnidad: Number,
  minimoCompra: Number,
  categoria: String,
  tags: [String],
  disponible: Boolean,
});

export default models.products || model("products", productSchema);
