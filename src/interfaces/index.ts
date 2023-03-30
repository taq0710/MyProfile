export interface ILogin {
  email: string;
  password: string;
}
export interface Post {
  _id?: string;
  image?: string;
  status: string;
  userName: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
  topic: string;
  hashtag: string;
}
export interface ImageURL {
  data: string[];
}
export interface ResponseData {
  totalPage: number;
  currentPage: number;
  data: Post[];
}
