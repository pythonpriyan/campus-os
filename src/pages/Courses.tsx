import { useState } from "react";

import CourseCard from "../components/courses/CourseCard";
import CourseForm from "../components/courses/CourseForm";

import {
  createCourse,
  editCourse,
  listCourses,
  removeCourse,
} from "../services/courses";

import type { Course } from "../types";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>(() =>
    listCourses(),
  );

  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] =
    useState<Course | undefined>();

  function refreshCourses() {
    setCourses(listCourses());
  }

  function handleSubmit(
    data: Omit<Course, "id"> | Course,
  ) {
    if ("id" in data) {
      editCourse(data);
    } else {
      createCourse(data);
    }

    refreshCourses();

    setShowForm(false);
    setEditingCourse(undefined);
  }

  function handleEdit(course: Course) {
    setEditingCourse(course);
    setShowForm(true);
  }

  function handleDelete(courseId: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?",
    );

    if (!confirmed) {
      return;
    }

    removeCourse(courseId);
    refreshCourses();
  }

  function handleCancel() {
    setShowForm(false);
    setEditingCourse(undefined);
  }

  return (
    <section className="page courses-page">
      <div className="courses-header">
        <div>
          <p className="eyebrow">ACADEMIC ORGANIZATION</p>

          <h1>My Courses</h1>

          <p>
            Manage the courses you're taking this semester.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => {
            setEditingCourse(undefined);
            setShowForm(true);
          }}
        >
          + Add Course
        </button>
      </div>

      {showForm && (
        <section className="course-form-panel">
          <div className="course-form-heading">
            <div>
              <p className="eyebrow">
                {editingCourse ? "EDIT COURSE" : "NEW COURSE"}
              </p>

              <h2>
                {editingCourse
                  ? "Edit course"
                  : "Add a new course"}
              </h2>
            </div>
          </div>

          <CourseForm
            course={editingCourse}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </section>
      )}

      {courses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-mark">+</div>

          <h2>No courses yet</h2>

          <p>
            Add your first course to start building your
            CampusOS workspace.
          </p>

          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setEditingCourse(undefined);
              setShowForm(true);
            }}
          >
            Add your first course
          </button>
        </div>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}