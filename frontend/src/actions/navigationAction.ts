import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { GET_NAVIGATION, BREAK_NAVIGATION } from "../actionTypes";
import { AppDispatch } from "../stores";

export const getNavigation =
  (navigation: ProfileScreenNavigationProp) =>
  async (dispatch: AppDispatch) => {
    dispatch({
      type: GET_NAVIGATION,
      payload: navigation,
    });
  };

export const breakNavigation = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: GET_NAVIGATION,
    payload: null,
  });
};