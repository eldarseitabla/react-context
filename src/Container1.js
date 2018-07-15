import React from "react";
import CountButton from "./CountButton";

export default class Container1 extends React.PureComponent {
  render() {
    console.log("Container1 render");
    return (
      <div>
        <CountButton />
      </div>
    );
  }
}
