import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://bobbywang11:uHTfFJN63X1gi8rX@cluster0.c0uzqzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB CONNECTED SUCCESFULLY");
  } catch (error) {
    console.error("Error connectiong to MONGDB", error);
  }
};
