import React, { useState } from "react";

const Todolist = ({ props, onToggle, removeTodo, index }) => {
  const removeitem = (e) => {
    removeTodo(e);
  };

  return (
    <div className="flex bg-white rounded-md shadow-md px-1 py-2 items-center gap-4 relative">
      <input
        type="checkbox"
        className="appearance-none outline-none border rounded-[50%] h-[21px] w-[21px]"
        defaultChecked={props.checkBox == true ? true : false}
        onClick={() => onToggle(!props.checkBox)}
      />
      <div>{props.InputText}</div>
      <div
        className="absolute right-4 cursor-pointer"
        onClick={() => removeitem(index)}
      >
        X
      </div>
    </div>
  );
};

export default Todolist;
