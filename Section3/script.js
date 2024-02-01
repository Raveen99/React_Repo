import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", { class: "heading1" }, [
    "This is heading 1",
    React.createElement("h2", { class: "heading2" }, [
      "This is heading 2",
      React.createElement("h3", { class: "heading3" }, "This is heading 3"),
    ]),
  ]),
]);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(header);

// JSX
const jsxHeader = (
  <div class="title">
    <h1 className="heading1">
      This is jsx heading1
      <h2 className="heading2">
        This is jsx heading 2<h3 className="heading3">This is jsx heading 3</h3>
      </h2>
    </h1>
  </div>
);

//root.render(jsxHeader);

//functional component

const Header2 = () => (
  <div class="title">
    <h1 className="heading1">
      This is jsx heading1 in func component
      <h2 className="heading2">
        This is jsx heading 2 in func component
        <h3 className="heading3">This is jsx heading 3 in fuct component</h3>
      </h2>
    </h1>
  </div>
);

const Title = () => (
  <div>
    <Header2 />
    <Header2></Header2>
    {Header2}
    This is title.
  </div>
);

//root.render(<Title />);

// ------------------------------------------------------------------------------
const HeaderCss = () => (
  <div className="header">
    <img
      src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
      className="logo"
      alt="logo"
    ></img>

    <input type="text" className="textbox"></input>
    <img
      className="user"
      src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
    ></img>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderCss />);
