import axios from "axios";
import { url } from "../constants";
//ESTADO INICIAL
const initialState = {
  banksArray: [],
  fetching: false,
};

//TYPE
const GET_BANKS = "GET_BANKS";
const GET_BANKS_SUCCESS = "GET_BANKS_SUCCESS";
const GET_BANKS_ERROR = "GET_BANKS_ERROR";

//REDUCER
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANKS:
      return { ...state, fetching: true };
    case GET_BANKS_SUCCESS:
      return { ...state, banksArray: action.payload, fetching: false };
    case GET_BANKS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

//ACTIONS
export const getBankList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_BANKS,
    });
    const res = await axios.get(url);
    saveToLocalStorage(res);
    dispatch({
      type: GET_BANKS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_BANKS,
      payload: "Hubo un error al hacer la peticion",
    });
  }
};
const saveToLocalStorage = (arrayBanks) => {
  try {
    const serial = JSON.stringify(arrayBanks);
    localStorage.setItem("bancos", serial);
  } catch (error) {
    console.warn(error);
  }
};

export const loadFromLocalStorage = (params) => {
  try {
    const banksList = localStorage.getItem("bancos");
    if (banksList === null) return undefined;
    return JSON.parse(banksList);
  } catch (error) {
    console.warn(error);
  }
};
