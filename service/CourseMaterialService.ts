import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

// get token
const getToken = () => {
  const token = localStorage.getItem("authToken");
  return `Bearer ${token}`;
};

export const getCourseMaterialData = async () => {
  try {
    const response = await axios.get(`${baseURL}/1`, {
      headers: {
        Authorization: getToken(),
      },
    });

    return response.data;
  } catch (err) {
    console.error("Error getting course material:", err);
    throw err;
  }
};
export const updateCourseMaterialData = async (
  material: FormData,
  matId: string
) => {
  try {
    const response = await axios.patch(`${baseURL}/${matId}`, material, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getToken(),
      },
    });

    return response.data;
  } catch (err) {
    console.error("Error updating material:", err);
    throw err;
  }
};
export const deleteCourseMaterialData = async (matId: string) => {
  try {
    const response = await axios.delete(`${baseURL}/${matId}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    return response.data;
  } catch (err) {
    console.error("Error deleting material:", err);
    throw err;
  }
};

// add new course material
export const addCourseMaterialData = async (material: FormData) => {
  try {
    const response = await axios.post(`${baseURL}`, material, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getToken(),
      },
    });

    return response.data;
  } catch (err) {
    console.error("Error saving material:", err);
    throw err;
  }
};