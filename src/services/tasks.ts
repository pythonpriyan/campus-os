import type { Task } from "../types";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../data/tasks";

export function createTask(
  data: Omit<Task, "id" | "createdAt">,
): Task {
  const task: Task = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date().toISOString(),
  };

  addTask(task);

  return task;
}

export function listTasks(): Task[] {
  return getTasks();
}

export function editTask(task: Task): Task {
  updateTask(task);

  return task;
}

export function removeTask(taskId: string): void {
  deleteTask(taskId);
}