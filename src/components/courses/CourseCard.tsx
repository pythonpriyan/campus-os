import { useNavigate } from "react-router-dom";
import type { Course } from "../../types";

interface CourseCardProps {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: (courseId: string) => void;
}

export default function CourseCard({
  course,
  onEdit,
  onDelete,
}: CourseCardProps) {

  const navigate = useNavigate();

  return (
    <article
  className="course-card"
  onClick={() => navigate(`/courses/${course.id}`)}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/courses/${course.id}`);
    }
  }}
> 
      <div className="course-card-top">
        <span className="course-code">
          {course.code}
        </span>

        <span className="course-semester">
          {course.semester}
        </span>
      </div>

      <h2>{course.name}</h2>

      {course.instructor ? (
        <p className="course-instructor">
          {course.instructor}
        </p>
      ) : (
        <p className="course-instructor muted">
          No instructor added
        </p>
      )}

      <div className="course-card-footer">
        <button
          type="button"
          className="course-action"
          onClick={(event) => {
            event.stopPropagation();
            onEdit(course);
          }}
        >
          Edit
        </button> 

        <button
          type="button"
          className="course-action course-delete"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(course.id);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
}