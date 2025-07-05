import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();

connectDB();

// middleware
app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log("We just got a new request");
  next();
});

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server start on PORT: 5001");
});
