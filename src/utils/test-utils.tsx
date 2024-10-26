import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import StoreProvider from "@/store/StoreProvider";
import ThemeProvider from "@/assets/ThemeProvider";

interface AllProvidersProps {
  children: ReactNode;
}

const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <main>{children}</main>
      </ThemeProvider>
    </StoreProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
