// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "white",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white',
        },
        outlined: {
          borderColor: 'white',
          color: 'white',
        },
        text: {
          color: 'white',
        },
      },
    },
  },
});

export default theme;
