import React from "react";
import { render } from "@testing-library/react";
import { AllProviders } from "../components/AllProviders/AllProviders.tsx";

export const renderWithProviders = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllProviders, ...options });
