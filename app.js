let parent = React.createElement(
  "div",
  { id: "parent" },
  [
      React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is sibling h1 tag"),
    React.createElement("h2", {}, "This is sibling h2 tag"),
  ]),
  ]

);

let root = ReactDOM.createRoot(document.getElementById("heading"));

root.render(parent);
