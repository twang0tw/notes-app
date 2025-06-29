export function getAllNotes(req, res) {
  res.send("you just fetched the notes");
}

export function createNote(req, res) {
  res.status(201).json({ message: "Post CREATED succesfylly!" });
}

export function updateNote(req, res) {
  res.status(201).json({ message: "Post UPDATED succesfylly!" });
}

export function deleteNode(req, res) {
  res.status(201).json({ message: "Post DELETED succesfylly!" });
}
