import axios from "axios";
import { API } from "./api";

export const getAllAdvantageOfMeditation = async () => {
  try {
    const response = await axios.get(`${API}/api/advantage-of-meditations`);

    return response.data;
  } catch (error) {
    //console.log(error);
  }
};
