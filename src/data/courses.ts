import type { Course } from "../types";
import { loadData, saveData } from "./storage";

const STORAGE_KEY = "courses";

export function getCourses(): Course[] {
  return loadData<Course[]>(STORAGE_KEY, []);
}

export function saveCourses(courses: Course[]): void {
  saveData(STORAGE_KEY, courses);
}

export function addCourse(course: Course): void {
  const courses = getCourses();

  saveCourses([...courses, course]);
}

export function updateCourse(updatedCourse: Course): void {
  const courses = getCourses();

  const updatedCourses = courses.map((course) =>
    course.id === updatedCourse.id ? updatedCourse : course,
  );

  saveCourses(updatedCourses);
}

export function deleteCourse(courseId: string): void {
  const courses = getCourses();

  saveCourses(
    courses.filter((course) => course.id !== courseId),
  );
}