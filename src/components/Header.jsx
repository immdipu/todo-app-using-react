import React from "react";
import sun from "../assets/icon-sun.svg";
import bgDesktopDark from "../assets/bgDesktopDark.jpg";
import NotesInput from "./NotesInput";
import Todolist from "./Todolist";
import { useState, useEffect } from "react";

const Header = () => {
  const mystyle = {
    backgroundImage: `url("${bgDesktopDark}")`,
  };
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://task-manager-api-we7s.onrender.com/api/v1/tasks"
      );
      let data = await res.json();
      setTasks(data.data.tasks);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={mystyle} className="h-[20rem] bg-no-repeat flex">
      <div className="w-[50%] m-auto">
        <div className="flex justify-between">
          <h1 className="text-white font-semibold text-4xl tracking-widest">
            TODO
          </h1>
          <img src={sun} className="w-fit h-fit" alt="sun" />
        </div>
        <NotesInput />
        <div className="mt-10">
          <div className="flex flex-col gap-2">
            {tasks.map((value, index) => {
              return <Todolist key={index} {...value} />;
            })}
          </div>
        </div>
        {/* <TodoFooter items={numberofleftTodo} setView={setView} /> */}
      </div>
    </div>
  );
};

export default Header;
