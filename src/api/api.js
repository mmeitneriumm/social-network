import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "3d85b6b7-37ed-42cb-9a02-6880255338d0",
  },
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const postFollow = (id) => {
  return instance.post(`/follow/${id}`, {}).then((response) => response.data);
};

export const deleteUnfollow = (id) => {
  return instance.delete(`follow/${id}`).then((response) => response.data);
};

export const getAuth = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

export const getProfile = (id) => {
  return instance.get(`profile/${id}`).then((response) => response.data);
};
