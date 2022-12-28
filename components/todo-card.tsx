import { FC, useEffect, useRef } from "react";
import { ITodo } from "../types/todo";

const TodoCard: FC<ITodo> = (props: ITodo): JSX.Element => {
  const {
    id,
    name,
    desc,
    completed,
    handleCompletedTodo,
    handleDeleteTodo,
    getTodoDatafromchild,
    handleEditTodoVisible,
  } = props;
  const statusTodoRef = useRef();

  return (
    <div className="shadow-md m-4 rounded-md">
      {completed == true ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="bg-green-500 w-2 rounded-l-md"></div>
              <div className="flex flex-col p-2 justify-between ">
                <div>
                  <span>Name: </span>
                  <span>{name}</span>
                </div>
                <div>
                  <span>Description: </span>
                  <span>{desc}</span>
                </div>
              </div>
            </div>
            <button className="bg-red-300 p-2 m-2 rounded-md">Delete</button>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <div className="flex justify-between items-center ">
              <div className="flex">
                <div className="bg-red-500 w-2  rounded-l-md"></div>
                <div className="flex flex-col p-2 ">
                  <div>
                    <span>Name: </span>
                    <span>{name}</span>
                  </div>
                  <div>
                    <span>Description: </span>
                    <span>{desc}</span>
                  </div>
                </div>
              </div>

              <div className="p-2 space-x-2">
                <button
                  className="bg-blue-300 p-2 rounded-md"
                  onClick={(e) => {
                    handleCompletedTodo(id as string);
                  }}
                >
                  Done
                </button>
                <button
                  className="bg-orange-300 p-2 rounded-md"
                  onClick={(e) => {
                    getTodoDatafromchild(name as string, desc, id as string);
                    handleEditTodoVisible();
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-300 p-2 rounded-md"
                  onClick={(e) => {
                    handleDeleteTodo(id as string);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoCard;
