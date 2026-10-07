import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { listCourses } from "../services/courses";
import {
  createNote,
  editNote,
  listNotes,
  removeNote,
} from "../services/notes";

import type { Note } from "../types";

export default function CourseNotes() {
  const { courseId } = useParams<{ courseId: string }>();

  const course = listCourses().find(
    (item) => item.id === courseId,
  );

  const [notes, setNotes] = useState<Note[]>(() =>
    listNotes().filter(
      (note) => note.courseId === courseId,
    ),
  );

  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] =
    useState<Note | undefined>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function refreshNotes() {
    setNotes(
      listNotes().filter(
        (note) => note.courseId === courseId,
      ),
    );
  }

  function resetForm() {
    setTitle("");
    setContent("");
    setEditingNote(undefined);
    setShowForm(false);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle) {
      return;
    }

    if (editingNote) {
      editNote({
        ...editingNote,
        title: trimmedTitle,
        content: trimmedContent,
      });
    } else {
      createNote({
        title: trimmedTitle,
        content: trimmedContent,
        courseId,
      });
    }

    refreshNotes();
    resetForm();
  }

  function handleEdit(note: Note) {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
    setShowForm(true);
  }

  function handleDelete(noteId: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (!confirmed) {
      return;
    }

    removeNote(noteId);
    refreshNotes();
  }

  if (!course) {
    return (
      <section className="page">
        <div className="empty-state">
          <div className="empty-state-mark">!</div>

          <h2>Course not found</h2>

          <p>
            The course you're looking for doesn't
            exist or may have been deleted.
          </p>

          <Link
            to="/courses"
            className="secondary-button"
          >
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page course-notes-page">
      <Link
        to={`/courses/${course.id}`}
        className="course-back-link"
      >
        ← Back to {course.name}
      </Link>

      <div className="notes-page-header">
        <div>
          <p className="eyebrow">
            {course.code} · {course.semester}
          </p>

          <h1>Notes</h1>

          <p>
            Notes for {course.name}.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => {
            setEditingNote(undefined);
            setTitle("");
            setContent("");
            setShowForm(true);
          }}
        >
          + New Note
        </button>
      </div>

      {showForm && (
        <section className="note-form-panel">
          <div className="note-form-heading">
            <div>
              <p className="eyebrow">
                {editingNote ? "EDIT NOTE" : "NEW NOTE"}
              </p>

              <h2>
                {editingNote
                  ? "Edit note"
                  : "Create a note"}
              </h2>
            </div>
          </div>

          <form
            className="note-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="note-title">
                Title
              </label>

              <input
                id="note-title"
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="e.g. Human Rights"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="note-content">
                Content
              </label>

              <textarea
                id="note-content"
                value={content}
                onChange={(event) =>
                  setContent(event.target.value)
                }
                placeholder="Write your notes here..."
                rows={10}
              />
            </div>

            <div className="note-form-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-button"
              >
                {editingNote
                  ? "Save Changes"
                  : "Create Note"}
              </button>
            </div>
          </form>
        </section>
      )}

      {notes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-mark">✎</div>

          <h2>No notes yet</h2>

          <p>
            Create your first note for {course.name}.
          </p>

          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setEditingNote(undefined);
              setTitle("");
              setContent("");
              setShowForm(true);
            }}
          >
            Create your first note
          </button>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <article
              key={note.id}
              className="note-card"
            >
              <div className="note-card-top">
                <span className="note-card-date">
                  {new Date(
                    note.updatedAt,
                  ).toLocaleDateString()}
                </span>
              </div>

              <h2>{note.title}</h2>

              {note.content ? (
                <p>{note.content}</p>
              ) : (
                <p className="muted">
                  No content added.
                </p>
              )}

              <div className="note-card-footer">
                <button
                  type="button"
                  className="note-action"
                  onClick={() =>
                    handleEdit(note)
                  }
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="note-action note-delete"
                  onClick={() =>
                    handleDelete(note.id)
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
} 