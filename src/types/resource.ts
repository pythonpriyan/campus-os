export interface Resource {
  id: string;
  title: string;
  description?: string;
  url?: string;
  type: "link" | "pdf" | "video" | "article" | "other";
  courseId?: string;
  createdAt: string;
}