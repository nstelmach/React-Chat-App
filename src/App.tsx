import "./main.css";
import { ChatRouter } from "./components/ChatRouter/ChatRouter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChatRouter />
      </Provider>
    </QueryClientProvider>
  );
};
