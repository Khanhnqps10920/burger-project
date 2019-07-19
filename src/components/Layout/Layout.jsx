import React from "react";
import Aux from "../../hoc/Auxille";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

export default function Layout(props) {
  return (
    <Aux>
      <Toolbar />
      <main className="content">{props.children}</main>
    </Aux>
  );
}
