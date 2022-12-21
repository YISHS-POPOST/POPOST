import { SET_PROFILE, BREAK_PROFILE } from "../actionTypes";
import { AppDispatch } from "../stores";
import { Profile } from "../type/profile";

export const setProfile =
  (profile: Profile) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_PROFILE,
      payload: { ...profile },
    });
  };

export const breakProfile = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: BREAK_PROFILE,
    payload: null,
  });
};
