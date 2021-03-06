import { createTheme } from "@mui/material/styles";

export const THEME_DARK = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90cbf9',
        },
        secondary: {
            main: '#90cbf9',
        },
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",

            disabled: "rgba(255, 255, 255, 0.5)",
        },
        background: {
            paper: "#424242",
            default: "#212121",
        },
    },
});


const THEME_LIGHT = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#1976d2',
        },
        
        text: {
            primary: "#FCF5EF",
            secondary: "#6DB5CA",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        background: {
            default: "#B8D8E0",
            paper: "#FCF5EF",
        },
    }
});

export default THEME_LIGHT;


export const colorBackground = "#6DB5CA";
export const colorOrange = '#FF7235';
export const colorBackgroundPaper = "#FCF5EF";