import React, { useContext } from "react";
import { Context } from "./Context";
import { useDispatch, useSelector } from "react-redux";
export default function ComponentA() {
const score = useSelector((state) => state.app.score);  
const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button>
      <div>{score}</div>
    </div>
  );
}
