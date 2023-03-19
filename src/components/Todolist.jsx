const Todolist = ({ _id, title, completed }) => {
  const deleteTask = async (id) => {
    await fetch(
      `https://task-manager-api-we7s.onrender.com/api/v1/tasks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const removeitem = () => {
    deleteTask(_id);
  };

  return (
    <div className="flex bg-white rounded-md shadow-md px-1 py-2 items-center gap-4 relative">
      <input
        type="checkbox"
        className="appearance-none outline-none border rounded-[50%] h-[21px] w-[21px]"
        defaultChecked={completed === true ? true : false}
      />
      <div>{title}</div>
      <div
        className="absolute right-4 cursor-pointer"
        onClick={() => removeitem()}
      >
        X
      </div>
    </div>
  );
};

export default Todolist;
