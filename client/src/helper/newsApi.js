import axios from "axios";
import { API } from "./api";

export const getAllFacebookPosts = async () => {
  try {
    const response = await axios.get(`${API}/api/events?populate=*`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
