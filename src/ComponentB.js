import React, { useContext } from "react";
import { Context } from "./Context";
import { useDispatch, useSelector } from "react-redux";
import { setAppState } from "./actions/action-creator";
import { SET_SCORE } from "../src/actions/action-types";

export default function ComponentB() {
  const dispatch = useDispatch();
  let score = useSelector((state) => state.app.score);
  const onChangeAppState = () => {
    dispatch(setAppState(SET_SCORE, (score += 1)));
  };
  const [context, setContext] = useContext(Context);
  return <div onClick={() => onChangeAppState()}>ComponentB: {context}</div>;
}
