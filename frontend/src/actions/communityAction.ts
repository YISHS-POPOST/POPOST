import { WRITEDATA_CLEAR, SET_WRITEDATA } from '../actionTypes';
import { AppDispatch } from "../stores";
import { CommunityType } from "../type/commuity";

export const setWriteData = (community:CommunityType) => async (dispatch:AppDispatch) => {
    dispatch({
        type: SET_WRITEDATA,
        payload: community,
      });
}

export const writeDataClear = () => async (dispatch:AppDispatch) => {
    dispatch({
        type: WRITEDATA_CLEAR,
        payload: {},
      });
}