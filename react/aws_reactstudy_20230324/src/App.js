import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import InputSample from "./pages/InputSample/InputSample";
import { reset } from "./styles/Global/reset";
import UserList from "./pages/UserList/UserList";
import Todo from "./pages/Todo/Todo";
import Todo_ex from "./pages/Todo_ex/Todo_ex";
import NumberCounter from "./pages/NumberCounter/NumberCounter";

function Test1() {
  return <h1>test1</h1>;
}

function Test2() {
  return <h1>test2</h1>;
}

function App() {
  return (
    <>
      <Global styles={reset} />
      <MainAside />
      <Routes>
        <Route path="/t1" Component={Test1} />
        <Route path="/t2" Component={Test2} />
        <Route path="/sample/input/1" Component={InputSample} />
        <Route path="/users/1" Component={UserList} />
        <Route path="/todo/1" Component={Todo} />
        <Route path="/todo/ex" Component={Todo_ex} />
        <Route path="/number/count" Component={NumberCounter} />
      </Routes>
    </>
  );
}

export default App;
