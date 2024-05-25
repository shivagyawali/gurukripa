import axios from "axios";
import { API } from "./api";

export const getPhotos = async () => {
  try {
    const response = await axios.get(`${API}/api/galleries?populate=*`);

    return response.data;
  } catch (error) {
    //console.log(error);
  }
};
