import { Image } from "react-native-image-crop-picker";
export interface Profile {
  image: Image | null;
  name: string;
  phone: string;
  email: string;
  nickname: string | null;
  introduce: string | null;
}
