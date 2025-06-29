import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESFULLY");
  } catch (error) {
    console.error("Error connectiong to MONGDB", error);
  }
};
