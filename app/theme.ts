/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiChip: {
      variants:[
        {
          props: { variant: 'info' },
          style: {
            backgroundColor: '#E3F2FD',
            color: '#054BA6',
          },
        },
        {
          props: { variant: 'pending' },
          style: {
            backgroundColor: '#DDE2FE',
            color: '#283073',
          },
        },
        {
          props: { variant: 'success' },
          style: {
            backgroundColor: '#CFF3E8',
            color: '#122E39',
          },
        },
      ]
    }
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    custom: {
      purple: "#DDE2FE",
      gray: "#535862",
      green: "#0B5B1D",
      lightGreen: "#E6F8EB",
      lightBlue: "#E3F2FD",
    },
    primary: {
      main: "#181D27",
    },
    secondary: {
      main: "#204C5B",
    },
    success: {
      main: "#CFF3E8",
    },
    info: {
      main: "#054BA6",
    },
  },
} as any);

export default theme;
