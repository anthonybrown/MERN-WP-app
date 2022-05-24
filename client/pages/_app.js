import { ThemeProvider } from "../context/theme"
import TopNav from '../components/TopNav'

function MyApp({ Component, pagerProps }) {
  return (
    <ThemeProvider>
      <TopNav />
      <Component {...pagerProps} />
    </ThemeProvider>
  )
}

export default MyApp
