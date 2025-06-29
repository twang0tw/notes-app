import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNode,
} from "../controllers/notesController.js";

const router = express.Router();

export default router;

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.get("/:id", deleteNode);
