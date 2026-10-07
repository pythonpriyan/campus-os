import type { Resource } from "../types";
import { loadData, saveData } from "./storage";

const STORAGE_KEY = "resources";

export function getResources(): Resource[] {
  return loadData<Resource[]>(STORAGE_KEY, []);
}

export function saveResources(resources: Resource[]): void {
  saveData(STORAGE_KEY, resources);
}

export function addResource(resource: Resource): void {
  const resources = getResources();

  saveResources([...resources, resource]);
}

export function updateResource(updatedResource: Resource): void {
  const resources = getResources();

  const updatedResources = resources.map((resource) =>
    resource.id === updatedResource.id ? updatedResource : resource,
  );

  saveResources(updatedResources);
}

export function deleteResource(resourceId: string): void {
  const resources = getResources();

  saveResources(
    resources.filter((resource) => resource.id !== resourceId),
  );
}