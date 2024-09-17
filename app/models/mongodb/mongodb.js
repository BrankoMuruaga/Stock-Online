import "dotenv/config";
import { connect } from "mongoose";

export default async function connectDB() {
  await connect(process.env.MONGODB_URI);
}
