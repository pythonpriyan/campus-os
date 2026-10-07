export interface Document {
  id: string;
  name: string;
  path: string;
  type: string;
  size?: number;
  courseId?: string;
  createdAt: string;
}