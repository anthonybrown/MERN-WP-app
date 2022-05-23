import { useContext } from "react"
import { ThemeContext } from "../context/theme"

function ToggleTheme() {
  const [theme, setTheme] = useContext(ThemeContext)
  return <div>🌞 {theme}</div>
}

export default ToggleTheme
