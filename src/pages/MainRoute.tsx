import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserFromLocalStorage } from "../storage/user.ts";
import { postRefresh } from "../api/user.ts";
import { ChatPage } from "./ChatPage.tsx";
import { RegisterPage } from "./RegisterPage.tsx";
import { Page } from "../models/page.ts";
import { setUser } from "../slice/userSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";

export const MainRoute: Page = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageUser = getUserFromLocalStorage();

    if (!localStorageUser) {
      dispatch(setUser(null));
      navigate(RegisterPage.path);
      return;
    }

    postRefresh(localStorageUser.id).then((user) => {
      if (user) {
        navigate(ChatPage.path);
      } else {
        dispatch(setUser(null));
        navigate(RegisterPage.path);
      }
    });
  }, [navigate, dispatch]);

  return <Outlet />;
};

MainRoute.path = "/";
