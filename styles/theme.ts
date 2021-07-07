import { createMuiTheme } from "@material-ui/core";

export const Theme = createMuiTheme({
  breakpoints: {
    values: {
      // とりあえずデフォルト値。何かと便利なので外に出しておく
      xs: 500,
      sm: 850,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 700,
      fontSize: 90,
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 200,
      fontStyle: "italic",
    },
    h3: {
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 700,
      fontSize: 35,
      fontStyle: "normal",
    },
  },
});
