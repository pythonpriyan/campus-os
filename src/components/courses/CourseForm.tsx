import { useEffect, useState } from "react";

import type { Course } from "../../types";

interface CourseFormProps {
  course?: Course;
  onSubmit: (
    data: Omit<Course, "id"> | Course,
  ) => void;
  onCancel: () => void;
}

export default function CourseForm({
  course,
  onSubmit,
  onCancel,
}: CourseFormProps) {
  const [name, setName] = useState(course?.name ?? "");
  const [code, setCode] = useState(course?.code ?? "");
  const [semester, setSemester] = useState(
    course?.semester ?? "",
  );
  const [instructor, setInstructor] = useState(
    course?.instructor ?? "",
  );

  useEffect(() => {
    setName(course?.name ?? "");
    setCode(course?.code ?? "");
    setSemester(course?.semester ?? "");
    setInstructor(course?.instructor ?? "");
  }, [course]);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedCode = code.trim();
    const trimmedSemester = semester.trim();
    const trimmedInstructor = instructor.trim();

    if (
      !trimmedName ||
      !trimmedCode ||
      !trimmedSemester
    ) {
      return;
    }

    if (course) {
      onSubmit({
        ...course,
        name: trimmedName,
        code: trimmedCode,
        semester: trimmedSemester,
        instructor:
          trimmedInstructor || undefined,
      });

      return;
    }

    onSubmit({
      name: trimmedName,
      code: trimmedCode,
      semester: trimmedSemester,
      instructor:
        trimmedInstructor || undefined,
    });
  }

  return (
    <form
      className="course-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="course-name">
          Course Name
        </label>

        <input
          id="course-name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="e.g. Cultural Studies"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="course-code">
          Course Code
        </label>

        <input
          id="course-code"
          type="text"
          value={code}
          onChange={(event) =>
            setCode(event.target.value)
          }
          placeholder="e.g. DSC01"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="course-semester">
          Semester
        </label>

        <input
          id="course-semester"
          type="text"
          value={semester}
          onChange={(event) =>
            setSemester(event.target.value)
          }
          placeholder="e.g. Semester 1"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="course-instructor">
          Instructor
        </label>

        <input
          id="course-instructor"
          type="text"
          value={instructor}
          onChange={(event) =>
            setInstructor(event.target.value)
          }
          placeholder="Optional"
        />
      </div>

      <div className="course-form-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="primary-button"
        >
          {course ? "Save Changes" : "Add Course"}
        </button>
      </div>
    </form>
  );
}