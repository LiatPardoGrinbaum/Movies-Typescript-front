import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      // main: "#72574a",
      main: "#703b39",
      light: "#bba296",
    },
    secondary: {
      main: "#a85856",
      light: "#df9e9e",
    },

    error: {
      main: "#rttr",
    },
  },
  typography: {
    fontFamily: ["Assistant", "sans-serif"].join(","),
    fontSize: 20,
  },
});
