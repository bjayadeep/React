import ReactDOM from "react-dom/client";
import React from "react";

let parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      [
        React.createElement("h1", { key: "h1-1" }, "This is h1 tag"),
        React.createElement("h2", { key: "h2-1" }, "This is h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child", key: "child2" },
      [
        React.createElement("h1", { key: "h1-2" }, "This is sibling h1 tag"),
        React.createElement("h2", { key: "h2-2" }, "This is sibling h2 tag"),
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("heading"));
root.render(parent);
