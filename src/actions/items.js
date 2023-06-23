import * as api from "../api";
import { BASE_URL } from "../constants/api-constants";

export const getItems = (searchString = '') => async (dispatch) => {
  try {
    const url = `${BASE_URL}?${searchString}`;
    const { data } = await api.fetchItems(url);
    const payload = data.data.items;
    dispatch({ type: "FETCH_ALL", payload });
  } catch (error) {
    console.error("ERROR : %o ", error.message);
  }
};
