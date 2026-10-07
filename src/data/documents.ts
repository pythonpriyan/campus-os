import type { Document } from "../types";
import { loadData, saveData } from "./storage";

const STORAGE_KEY = "documents";

export function getDocuments(): Document[] {
  return loadData<Document[]>(STORAGE_KEY, []);
}

export function saveDocuments(documents: Document[]): void {
  saveData(STORAGE_KEY, documents);
}

export function addDocument(document: Document): void {
  const documents = getDocuments();

  saveDocuments([...documents, document]);
}

export function updateDocument(updatedDocument: Document): void {
  const documents = getDocuments();

  const updatedDocuments = documents.map((document) =>
    document.id === updatedDocument.id ? updatedDocument : document,
  );

  saveDocuments(updatedDocuments);
}

export function deleteDocument(documentId: string): void {
  const documents = getDocuments();

  saveDocuments(
    documents.filter((document) => document.id !== documentId),
  );
}