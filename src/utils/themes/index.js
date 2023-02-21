import { createTheme,responsiveFontSizes } from "@mui/material/styles";

let Theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
      light:'#e6f7ff',
      contrastText:"#fff",
    },
    secondary: {
      main: "#4caf50",
      light:'#dcefdc',

      contrastText:"#fff",

    },
    error:{
      main:"#d32f2f",
      light:'##f6d5d5',
      contrastText:"#fff",
    },
    warning:{
      main:"#ed6c02",
      light:' #fed5b3',
      contrastText:"#fff",

    },
    success:{
      main:"#2e7d32",
      light:'     #daf1db',
      contrastText:"#fff",


    },
   // appbar:"red"
  },
  typography:{
    subtitle1:{
      fontSize:12,
    },
    subtitle2:{
      fontSize:14,
    },
    body1:{

    },
    body2:{

    },
    h1:{

    },
    h2:{

    },
    h3:{

    },
    h4:{

    },
    h5:{

    },
    h6:{

    },
    },

});

Theme = responsiveFontSizes(Theme); 
export default Theme;