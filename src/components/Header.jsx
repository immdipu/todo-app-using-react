import React from "react";
import sun from "../assets/icon-sun.svg";
import bgDesktopDark from "../assets/bgDesktopDark.jpg";
import NotesInput from "./NotesInput";
import Todolist from "./Todolist";
import TodoFooter from "./TodoFooter";
import { useState, useEffect } from "react";

const Header = () => {
  const mystyle = {
    backgroundImage: `url("${bgDesktopDark}")`,
  };
  const [todo, setTodo] = useState([]);
  const [filterTodo, setfilterTodo] = useState(todo);
  const [view, setView] = useState("All");

  useEffect(() => {
    if (view == "Active") {
      setfilterTodo(todo.filter((todo) => todo.checkBox == false));
    }
    if (view == "Completed") {
      setfilterTodo(todo.filter((todo) => todo.checkBox == true));
    }
  }, [view, todo]);

  function updateTaskDone(todoIndex, newCheckBox) {
    setTodo((prev) => {
      let newTodo = [...prev];
      newTodo[todoIndex].checkBox = newCheckBox;
      return newTodo;
    });
  }

  function removeitem(i) {
    const newtodo = todo.filter((value, inex) => inex !== i);
    setTodo(newtodo);
  }

  const numberofleftTodo = todo.filter((item) => item.checkBox == false).length;

  return (
    <div style={mystyle} className="h-[20rem] bg-no-repeat flex">
      <div className="w-[50%] m-auto">
        <div className="flex justify-between">
          <h1 className="text-white font-semibold text-4xl tracking-widest">
            TODO
          </h1>
          <img src={sun} className="w-fit h-fit" alt="sun" />
        </div>
        <NotesInput todo={todo} setTodo={setTodo} />
        <div className="mt-10">
          <div>
            {view === "All" ? (
              <>
                {todo.map((value, index) => {
                  return (
                    <Todolist
                      key={index}
                      props={value}
                      onToggle={(checkBox) => updateTaskDone(index, checkBox)}
                      index={index}
                      removeTodo={removeitem}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                {filterTodo.map((value, index) => {
                  return (
                    <Todolist
                      key={index}
                      props={value}
                      onToggle={(checkBox) => updateTaskDone(index, checkBox)}
                      index={index}
                      removeTodo={removeitem}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
        <TodoFooter items={numberofleftTodo} setView={setView} />
      </div>
    </div>
  );
};

export default Header;
