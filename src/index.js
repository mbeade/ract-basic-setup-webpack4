
import React from "react";
import ReactDOM from "react-dom";

const nombre= 'Matias';

const Index = ({name, ape}) => {
  return <div>Welcome to React! {name} {ape}</div>;
};

const el = document.getElementById("index");
ReactDOM.render(<Index name={nombre} ape='Beade'/>, el);