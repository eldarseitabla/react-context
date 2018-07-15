import React from "react";
import { CountContext } from "./CountContext";

export default () => (
  <CountContext.Consumer>
    {({ increment }) => <button onClick={increment}>increment</button>}
  </CountContext.Consumer>
);
