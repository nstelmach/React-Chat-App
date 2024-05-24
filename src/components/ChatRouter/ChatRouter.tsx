import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage } from "../../pages/RegisterPage.tsx";
import { ChatPage } from "../../pages/ChatPage.tsx";
import { MainRoute } from "../../pages/MainRoute.tsx";
import { FunctionComponent } from "react";

const router = createBrowserRouter([
  {
    path: MainRoute.path,
    element: <MainRoute />,
    children: [
      {
        path: RegisterPage.path,
        element: <RegisterPage />,
      },
      { path: ChatPage.path, element: <ChatPage /> },
    ],
  },
]);

export const ChatRouter: FunctionComponent = () => {
  return <RouterProvider router={router} />;
};
