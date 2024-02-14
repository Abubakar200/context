import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

function App() {
  const {count} = useContext(CounterContext);
  return (
    <>
      <h1>Counter is: {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      {/* 1 <Login />
      1 <Profile /> */}
    </>
  );
}

export default App;
