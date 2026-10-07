import type { Task } from "../types";
import { loadData, saveData } from "./storage";

const STORAGE_KEY = "tasks";

export function getTasks(): Task[] {
  return loadData<Task[]>(STORAGE_KEY, []);
}

export function saveTasks(tasks: Task[]): void {
  saveData(STORAGE_KEY, tasks);
}

export function addTask(task: Task): void {
  const tasks = getTasks();

  saveTasks([...tasks, task]);
}

export function updateTask(updatedTask: Task): void {
  const tasks = getTasks();

  const updatedTasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task,
  );

  saveTasks(updatedTasks);
}

export function deleteTask(taskId: string): void {
  const tasks = getTasks();

  saveTasks(
    tasks.filter((task) => task.id !== taskId),
  );
}