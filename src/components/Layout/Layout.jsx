import React from "react";
import Aux from "../../hoc/Auxille";
import "./Layout.css";

export default function Layout(props) {
  return (
    <Aux>
      <div>Thanh menu abcd ....</div>
      <main className="content">{props.children}</main>
    </Aux>
  );
}
