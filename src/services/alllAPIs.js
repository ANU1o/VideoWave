import { baseURL } from "./baseurl";
import { commonRequest } from "./commonRequest";

// add video
export const addVideo = async (body) => {
  return await commonRequest("POST", `${baseURL}/videos`, body);
};

// get video (All)
export const getAllVideos = async () => {
  return await commonRequest("GET", `${baseURL}/videos`, {});
};

// delete 1 video
export const deleteVideo = async (id) => {
  return await commonRequest("DELETE", `${baseURL}/videos/${id}`, {});
};

// add Category
export const addCategory = async (body) => {
  return await commonRequest("POST", `${baseURL}/category`, body);
};

// get category
export const getCategory = async (id) => {
  return await commonRequest("GET", `${baseURL}/category/${id}`, {});
};

// get all categories
export const getCategories = async () => {
  return await commonRequest("GET", `${baseURL}/category`, {});
};

// category delete
export const deleteCategory = async (id) => {
  return await commonRequest("DELETE", `${baseURL}/category/${id}`, {});
};

// add History
export const addHistory = async (body) => {
  return await commonRequest("POST", `${baseURL}/history`, body);
};

//get History
export const getAllHistory = async () => {
  return await commonRequest("GET", `${baseURL}/history`, {});
};

//Delete History
export const deleteHistory = async (id) => {
  return await commonRequest("DELETE", `${baseURL}/history/${id}`, {});
};

// drag and drop

//access single video
export const getVideo = async (id) => {
  return await commonRequest("GET", `${baseURL}/videos/${id}`, {});
};

//update category
export const updateCategory = async (id, body) => {
  return await commonRequest("PUT", `${baseURL}/category/${id}`, body);
};
