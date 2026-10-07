import type { Resource } from "../types";
import {
  addResource,
  deleteResource,
  getResources,
  updateResource,
} from "../data/resources";

export function createResource(
  data: Omit<Resource, "id" | "createdAt">,
): Resource {
  const resource: Resource = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date().toISOString(),
  };

  addResource(resource);

  return resource;
}

export function listResources(): Resource[] {
  return getResources();
}

export function editResource(resource: Resource): Resource {
  updateResource(resource);

  return resource;
}

export function removeResource(resourceId: string): void {
  deleteResource(resourceId);
}