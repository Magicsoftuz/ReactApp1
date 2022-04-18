// Import qilish kerak: React va ReactDOC library larni
import React from "react";
import ReactDOM from "react-dom";

// Component yaratish kerak

const App = function () {
  return <div>Hello World</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
