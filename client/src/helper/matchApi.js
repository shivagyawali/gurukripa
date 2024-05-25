import axios from "axios";
import { API } from "./api";

export const getAllLiveMatches = async () => {
  try {
    const response = await axios.get(
      `${API}/api/v1/matches/national-matches-listing`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    //console.log(error);
  }
};
export const getNationalMatchesScoreCard = async (matchUrl) => {
  try {
    const response = await axios.get(
      `${API}/api/v1/matches/national-matches-listing/single`,
      {
        params: { matchUrl },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    //console.log(error);
  }
};
