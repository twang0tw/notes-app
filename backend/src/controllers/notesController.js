import Note from "../models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getALLNotes controler", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title: title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("error in  creatNote controler", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteByID(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error in getAllNoteById Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("error in  update Note controler", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNode(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in DeleteNode controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
