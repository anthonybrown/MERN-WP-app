import ToggleTheme from "../components/ToggleTheme"
import { Button } from "antd"

function Home() {
  return (
    <div class='ui page container'>
      <h1>Home Page</h1>
      <Button type='primary'>Click me!</Button>
      <br />
      <ToggleTheme />
    </div>
  )
}

export default Home
