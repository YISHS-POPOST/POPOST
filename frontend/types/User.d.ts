export interface UserType {
  id: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  introduce: string;
}

export interface LoginUser {
  id: string;
  password: string;
}

export interface DataSetInterface extends LoginUser {
  users: UserInterface;
}
