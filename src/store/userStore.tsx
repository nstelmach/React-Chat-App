// import {
//   createContext,
//   FunctionComponent,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { User } from "../models/user.ts";
// import {
//   getUserFromLocalStorage,
//   setUserToLocalStorage,
// } from "../storage/user.ts";
//
// type UserStore = {
//   user: User | null;
//   setUser: (user: User | null) => void;
// };
//
// const initialUser = getUserFromLocalStorage();
//
// const UserContext = createContext<UserStore>({
//   user: initialUser,
//   setUser: () => {},
// });
//
// export const UserStoreProvider: FunctionComponent<PropsWithChildren> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(initialUser);
//
//   useEffect(() => {
//     if (user) {
//       setUserToLocalStorage(user);
//     }
//   }, [user]);
//
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
//
// export const useUserStore = () => {
//   return useContext(UserContext);
// };
