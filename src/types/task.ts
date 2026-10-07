export interface Task {
  id: string;
  title: string;
  description?: string;
  courseId?: string;
  dueDate?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
}