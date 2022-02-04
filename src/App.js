import React, { useState } from "react";
import { Context } from "./Context.js";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { setAppState } from "./actions/action-creator.js";

export default function App() {
  const [context, setContext] = useState("default context value");

  return (
    <Context.Provider value={[context, setContext]}>
      <ComponentA />
      <ComponentB />
    </Context.Provider>
  );
}
