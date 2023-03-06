//file tạo ra ThemeContext và ThemeProvider

import {useState, createContext} from 'react'
const ThemeContext = createContext()
function ThemeProvider ({children}) {
    const [theme, setTheme] = useState('dark')
    console.log(theme)
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark') 
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}
export{ThemeContext, ThemeProvider}