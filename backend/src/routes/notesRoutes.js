import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNode,
  getNoteByID,
} from "../controllers/notesController.js";

const router = express.Router();

export default router;

router.get("/", getAllNotes);

router.get("/:id", getNoteByID);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNode);
