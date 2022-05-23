import "antd/dist/antd.dark.css"
// import "antd/dist/antd.css"
import { ThemeProvider } from "../context/theme"

function MyApp({ Component, pagerProps }) {
  return (
    <ThemeProvider>
      <Component {...pagerProps} />
    </ThemeProvider>
  )
}

export default MyApp
