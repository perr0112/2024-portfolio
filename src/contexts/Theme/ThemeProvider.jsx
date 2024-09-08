import { useState } from "react";

import { ThemeContext } from ".";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('basic');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
