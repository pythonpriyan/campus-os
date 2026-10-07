import type { Note } from "../types";
import { loadData, saveData } from "./storage";

const STORAGE_KEY = "notes";

export function getNotes(): Note[] {
  return loadData<Note[]>(STORAGE_KEY, []);
}

export function saveNotes(notes: Note[]): void {
  saveData(STORAGE_KEY, notes);
}

export function addNote(note: Note): void {
  const notes = getNotes();

  saveNotes([...notes, note]);
}

export function updateNote(updatedNote: Note): void {
  const notes = getNotes();

  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note,
  );

  saveNotes(updatedNotes);
}

export function deleteNote(noteId: string): void {
  const notes = getNotes();

  saveNotes(
    notes.filter((note) => note.id !== noteId),
  );
}