import { createContext, useContext } from 'react';

const defaultTheme = {
    color: "white",
    theme_color: "#ffd700",
    background_color: "#728a75"
}

const ThemeContext = createContext(defaultTheme);

interface IThemeContextProps {
    children: any
}

export function ThemeProvider(props: IThemeContextProps) {
    return <ThemeContext.Provider value={defaultTheme}>
        {props.children}
    </ThemeContext.Provider>;
}

export function useThemeContext() {
    return useContext(ThemeContext);
}