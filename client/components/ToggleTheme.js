import { useContext } from "react"
import { ThemeContext } from "../context/theme"
import Head from "next/head"

function ToggleTheme() {
  const [theme, setTheme] = useContext(ThemeContext)
  return (
    <>
    <Head>
      <link rel="stylesheet" href={`/css/${theme}.css`} />
      <link rel="stylesheet" href="/css/styles.css" />
    </Head>
      {theme === "light" ? (
        <span
          onClick={() => {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
          }}
          style={{ fontSize: "1.1rem"}}
        >
          🌝
        </span>
      ) : (
        <span
          onClick={() => {
            setTheme("light")
            localStorage.setItem("theme", "light")
          }}
          style={{ fontSize: "1.1rem" }}
        >
          🌑
        </span>
      )}
    </>
  )
}

export default ToggleTheme
