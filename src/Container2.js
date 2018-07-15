import React from "react";
import CountValue from "./CountValue";

export default class Container2 extends React.PureComponent {
  render() {
    console.log("Container2 render");
    return (
      <div>
        <CountValue />
      </div>
    );
  }
}
