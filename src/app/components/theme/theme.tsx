// /theme/theme.js
import { Theme } from './theme.types';
const theme:Theme = {
    colors: {
      primary: "#6D5DFE", 
      secondary: "#faf9fa", 
      dark: "#000000", 
      light: "#FFFFFF", 
      accent: "#a48ea6", 
      accent2: "#99849b",
      textPrimary: "#000000", 
      textSecondary: "#6C6C6C",
      accentDark: '"#000000"',
      text:"",
     

    },
    typography: {
      
      fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
        light: 300,
       
      },
      fontFamily: "'Poppins', sans-serif",
      fontSizes: {
        large: "2rem",
        medium: "1.5rem",
        small: "1rem",
        
      },
    },
  };
  
  export default theme;
  