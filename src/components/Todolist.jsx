import React from "react";

const Todolist = ({ _id, title, completed, deleteTask }) => {
  return (
    <div className="flex max-lg:flex-col bg-white rounded-md shadow-md px-1 py-2 items-center  gap-4 relative">
      <div>
        <input
          type="checkbox"
          className="appearance-none outline-none border rounded-[50%] h-[21px] w-[21px] pointer-events-none"
          defaultChecked={completed === true ? true : false}
        />
      </div>

      <p className="flex-grow">{title}</p>

      <div
        className="absolute right-4 opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer "
        data-id={_id}
        onClick={() => deleteTask(_id)}
      >
        X
      </div>
    </div>
  );
};

export default Todolist;
