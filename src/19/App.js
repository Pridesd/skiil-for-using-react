import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useState } from "react";
import loadable from "@loadable/component";
// const SplitMe = React.lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisivle] = useState(false);

  const onClick = () => {
    setVisivle(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Jello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
