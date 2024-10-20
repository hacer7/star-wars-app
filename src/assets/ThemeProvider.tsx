"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/assets/theme";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StoreProvider;
