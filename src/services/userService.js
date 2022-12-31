import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/getAllUsers?id=${inputId}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/createUser", data);
};

const deleteUserService = (idUser) => {
  return axios.delete("/api/delete-user", { data: { id: idUser } });
};

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService };
