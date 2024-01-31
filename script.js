import React from "react";
import ReactDOM from "react-dom/client";

//React element creates objects => renderedTo - HTML Element.
const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("h1", { id: "child1" }, "This is h1 tag"),
    React.createElement("h2", { id: "child2" }, "This is h2 tag"),
  ]
);
console.log("Heading: ", heading);

/*
JSX - HTML Like syntax which helps in creating react elements easily.
JSX is not legit javascript. JavaScript engine cannot understand JSX Code. JSX Code is transpiled before it reaches javascript engine.

Now Parcel does this transpiling but with help of babel

JSX => React.createElement() - this is an object => renderedTo - HTML Element
*/
const JSXHeading = <h1 id="heading"> Hi! This is JSX Heading.</h1>;
console.log("JSX Heading: ", JSXHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//When we render those elements, then react will convert those objects in html tag.
root.render(heading);

//When we render this in root, the above rendered data will be replaced by current data.
root.render(JSXHeading);
