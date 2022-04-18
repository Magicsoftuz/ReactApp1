// Import qilish kerak: React va ReactDOC library larni
import React from "react";
import ReactDOM from "react-dom";

// Component yaratish kerak

const App = function () {
  return (
    <div style={{ fontSize: "30px" }}>
      <label className="labelName" htmlFor="name" id="name">
        Enter Name:
      </label>
      <input id="name" />
      <button type="submit" style={{ color: "white", backgroundColor: "blue" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
