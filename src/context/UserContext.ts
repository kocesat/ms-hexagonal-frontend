import { createContext } from "react";

export interface UserInfo {
  id: number;
  name: string;
  year: number;
  semester: number;
}

export interface UserContextType {
  userInfo: UserInfo;
  setUserContext: (userInfo: UserInfo) => void; 
}

export const UserContext = createContext<UserContextType>({
  userInfo: {
    id: 1,
    name: "Esat",
    year: 2024,
    semester: 2
  },
  setUserContext: (userInfo: UserInfo) => {}
});

const UserContextProvider = UserContext.Provider;
export default UserContextProvider;