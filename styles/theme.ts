import { createMuiTheme } from "@material-ui/core";

export const Theme = createMuiTheme({
  breakpoints: {
    values: {
      // とりあえずデフォルト値。何かと便利なので外に出しておく
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h2: {
      fontFamily: "mr-eaves-modern, sans-serif",
      fontWeight: 200,
      fontStyle: "italic",
    },
  },
});
