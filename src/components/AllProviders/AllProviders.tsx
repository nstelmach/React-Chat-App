import { FunctionComponent, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../../store/store.ts";

export const AllProviders: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <QueryClientProvider client={new QueryClient()}>
    <Provider store={store}>{children}</Provider>
  </QueryClientProvider>
);
