import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const Posts = () => {
  return api.get("/posts");
};

//delete api

export const Delete = (id) => {
  return api.delete(`/posts/${id}`);
};

//Post Api

export const Post = (insert) => {
  return api.post("/posts", insert);
};

export const Update = (id, post) => {
  return api.patch(`/posts/${id}`, post);
};
