import React, { useContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

const ThemeContext = React.createContext(themes.light)

function UseContextDemo() {
  return(
    <ThemeContext.Provider value={themes.dark}>
      <ThemeButton/>
    </ThemeContext.Provider>
  )
}
export default UseContextDemo


function ThemeButton() {
  const theme = useContext(ThemeContext)
  return(
    <button style={{background: theme.background, color: theme.foreground}}>
      I am styled by theme context!
    </button>
  )
}