import { AppDispatch } from "../../src/stores";
import { Profile } from "../../src/type/profile";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../src/type/state";
import { setProfile } from "../../src/actions/profileAction";
import { Dispatch } from "redux";

type filed = "image" | "name" | "phone" | "email" | "nickname" | "introduce";

// 필드 이름 , 값

export const nextPage = (
  field: filed,
  data: any,
  dispatch: Dispatch<any>,
  profile: Profile
) => {
  const profileEditItems: Profile = {
    ...profile,
    [field]: data,
  };
  dispatch(setProfile(profileEditItems));
};
