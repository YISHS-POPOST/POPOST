import { SET_WRITEDATA, WRITEDATA_CLEAR } from '../types';

interface communityType {
    title: string;
    content: string;
    link: string;
    user_id: string;
};


export const setWriteData = (community:communityType) => async dispatch => {
    dispatch({
        type: SET_WRITEDATA,
        payload: community,
      });
}

export const writeDataClear = () => async dispatch => {
    dispatch({
        type: WRITEDATA_CLEAR,
        payload: {},
      });
}