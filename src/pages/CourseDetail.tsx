import { Link, useParams } from "react-router-dom";

import { listCourses } from "../services/courses";

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();

  const course = listCourses().find(
    (item) => item.id === courseId,
  );

  if (!course) {
    return (
      <section className="page">
        <div className="empty-state">
          <div className="empty-state-mark">!</div>

          <h2>Course not found</h2>

          <p>
            The course you're looking for doesn't exist
            or may have been deleted.
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
    <section className="page course-detail-page">
      <Link
        to="/courses"
        className="course-back-link"
      >
        ← Back to My Courses
      </Link>

      <div className="course-detail-header">
        <div>
          <p className="eyebrow">{course.code}</p>

          <h1>{course.name}</h1>

          <p className="course-detail-meta">
            {course.semester}
            {course.instructor
              ? ` · ${course.instructor}`
              : ""}
          </p>
        </div>
      </div>

      <div className="course-workspace-grid">
        <Link
            to={`/courses/${course.id}/notes`}
            className="workspace-card workspace-card-link"
        >
            <span className="workspace-card-icon">✎</span>

            <h2>Notes</h2>

            <p>
                Create and organize notes for this course.
            </p>

            <span className="workspace-card-status">
                Open Notes →
            </span>
        </Link>

        <article className="workspace-card">
          <span className="workspace-card-icon">□</span>

          <h2>Documents</h2>

          <p>
            Keep course PDFs, readings and files together.
          </p>

          <span className="workspace-card-status">
            Coming next
          </span>
        </article>

        <article className="workspace-card">
          <span className="workspace-card-icon">✓</span>

          <h2>Tasks</h2>

          <p>
            Manage assignments, deadlines and coursework.
          </p>

          <span className="workspace-card-status">
            Coming next
          </span>
        </article>

        <article className="workspace-card">
          <span className="workspace-card-icon">◇</span>

          <h2>Resources</h2>

          <p>
            Collect useful links and study materials.
          </p>

          <span className="workspace-card-status">
            Coming next
          </span>
        </article>

        <article className="workspace-card workspace-card-wide">
          <span className="workspace-card-icon">◉</span>

          <h2>Study</h2>

          <p>
            Turn this course into a focused study
            environment with revision and active recall.
          </p>

          <span className="workspace-card-status">
            Coming next
          </span>
        </article>
      </div>
    </section>
  );
} 