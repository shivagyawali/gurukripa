import axios from "axios";
import { API } from "./api";

export const getAllPrograms = async () => {
  try {
    const response = await axios.get(`${API}/api/programs?populate=*`);

    return response.data;
  } catch (error) {
    //console.log(error);
  }
};
