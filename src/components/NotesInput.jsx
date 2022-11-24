import React, { useRef } from "react";

const NotesInput = ({ todo, setTodo }) => {
  const checkBox = useRef(null);
  const InputText = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        InputText: InputText.current.value,
        checkBox: checkBox.current.checked,
      },
    ]);

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
      />
    </form>
  );
};

export default NotesInput;
