import type { Document } from "../types";
import {
  addDocument,
  deleteDocument,
  getDocuments,
  updateDocument,
} from "../data/documents";

export function createDocument(
  data: Omit<Document, "id" | "createdAt">,
): Document {
  const document: Document = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date().toISOString(),
  };

  addDocument(document);

  return document;
}

export function listDocuments(): Document[] {
  return getDocuments();
}

export function editDocument(document: Document): Document {
  updateDocument(document);

  return document;
}

export function removeDocument(documentId: string): void {
  deleteDocument(documentId);
}