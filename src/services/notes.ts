import type { Note } from "../types";
import {
  addNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../data/notes";

export function createNote(
  data: Omit<Note, "id" | "createdAt" | "updatedAt">,
): Note {
  const now = new Date().toISOString();

  const note: Note = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: now,
    updatedAt: now,
  };

  addNote(note);

  return note;
}

export function listNotes(): Note[] {
  return getNotes();
}

export function editNote(note: Note): Note {
  const updatedNote: Note = {
    ...note,
    updatedAt: new Date().toISOString(),
  };

  updateNote(updatedNote);

  return updatedNote;
}

export function removeNote(noteId: string): void {
  deleteNote(noteId);
}