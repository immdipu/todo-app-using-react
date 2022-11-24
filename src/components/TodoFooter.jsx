import React from "react";

const TodoFooter = ({ items, setView }) => {
  return (
    <div className="flex justify-evenly bg-white shadow-lg rounded-md h-10 items-center mt-10">
      <div>{items} items left</div>
      <div>
        <ul className="flex gap-4">
          <li
            className="cursor-pointer hover:opacity-80 btn"
            onClick={() => setView("All")}
          >
            All
          </li>
          <li
            className="cursor-pointer hover:opacity-80 btn"
            onClick={() => setView("Active")}
          >
            Active
          </li>
          <li
            className="cursor-pointer hover:opacity-80 btn"
            onClick={() => setView("Completed")}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="cursor-pointer hover:opacity-80">Clear Completed</div>
    </div>
  );
};

export default TodoFooter;
