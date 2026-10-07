import type { Course } from "../types";
import {
  addCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../data/courses";

export function createCourse(
  data: Omit<Course, "id">,
): Course {
  const course: Course = {
    id: crypto.randomUUID(),
    ...data,
  };

  addCourse(course);

  return course;
}

export function listCourses(): Course[] {
  return getCourses();
}

export function editCourse(course: Course): Course {
  updateCourse(course);

  return course;
}

export function removeCourse(courseId: string): void {
  deleteCourse(courseId);
}