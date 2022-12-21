import { SET_PROFILE, BREAK_PROFILE } from "../actionTypes";
import { Profile } from "../type/profile";

const initialState: Profile | null = null;
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...action.payload,
      };
    case BREAK_PROFILE:
      return null;
    default:
      return state;
  }
}
