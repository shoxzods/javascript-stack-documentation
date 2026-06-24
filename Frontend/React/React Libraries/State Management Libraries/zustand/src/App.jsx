import Main from "./components/main";
import Counter from "./components/counter";
import Fetching from "./components/fetching";
import Info from "./components/info";

export default function App() {
  return (
    <>
      <Counter />
      <Fetching />
      <Main />
      <Info />
    </>
  )
}