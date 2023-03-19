import React, { useRef } from "react";

const NotesInput = () => {
  const checkBox = useRef(null);
  const InputText = useRef(null);

  const createData = async (data) => {
    try {
      const response = await fetch(
        "https://task-manager-api-we7s.onrender.com/api/v1/tasks",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseTask = await response.json();
      console.log(responseTask);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    let data = {
      title: InputText.current.value,
      completed: checkBox.current.checked,
    };
    createData(data);
    InputText.current.value = "";
    checkBox.current.checked = false;
  };

  return (
    <form
      className="flex gap-2 w-full h-8 items-center"
      onSubmit={submitHandler}
    >
      <input
        type="checkbox"
        className="appearance-none outline-none border rounded-[50%] h-[21px] w-[21px]"
        ref={checkBox}
      />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full h-full outline-none"
        ref={InputText}
        onSubmit={submitHandler}
        required
      />
    </form>
  );
};

export default NotesInput;
