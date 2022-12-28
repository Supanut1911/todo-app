import { useRouter } from "next/router";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  addTodo,
  completedTodo,
  deleteTodoById,
  editTodobyId,
  fetchTodos,
} from "../services/todos.service";
import { ITodo } from "../types/todo";
import AddTodoModal from "./add-todo-modal";
import EditTodoModal from "./edit-todo-modal";
import TodoCard from "./todo-card";

interface Props {}

const TodoList: FC<Props> = (props): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [visible, setVisible] = useState(false);
  const [EditVisible, setEditVisible] = useState(false);
  const [oldName, setOldName] = useState("");
  const [oldDesc, setOldDesc] = useState("");
  const [todoIdtoEdit, setTodoIdtoEdit] = useState("");

  const handleAddTodo = async (name: string, desc: string) => {
    const res = await addTodo(name, desc);
    const copy = [...todos, res];
    setTodos(copy);
    setVisible(false);
  };

  const handleEditTodo = async (id: string, name: string, desc: string) => {
    const res = await editTodobyId(id, name, desc);
    window.location.reload();
  };

  const handleFetchTodos = async () => {
    const res = await fetchTodos();
    setTodos(res);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleEditVisible = () => {
    setEditVisible(!EditVisible);
  };

  const handleCompletedTodo = async (id: string) => {
    const res = await completedTodo(id);
    window.location.reload();
  };

  const handleDeleteTodo = async (id: string) => {
    const res = await deleteTodoById(id);
    window.location.reload();
  };

  const getTodoDatafromchild = (name: string, desc: string, id: string) => {
    setOldName(name);
    setOldDesc(desc);
    setTodoIdtoEdit(id);

    console.log("idx", id);
  };

  useEffect(() => {
    handleFetchTodos();
  }, []);

  return (
    <div className="mt-4 relative">
      <div className="flex space-x-2">
        <AddTodoModal
          visible={visible}
          handleAddTodo={handleAddTodo}
          handleVisible={handleVisible}
        />
        <EditTodoModal
          id={todoIdtoEdit}
          visible={EditVisible}
          handleEditTodo={handleEditTodo}
          handleVisible={handleEditVisible}
          oldName={oldName}
          oldDesc={oldDesc}
        />
      </div>
      <div>
        {!todos && <p>Loading...</p>}
        {todos && (
          <div>
            {todos.map((todo: ITodo) => {
              return (
                <TodoCard
                  key={todo.id}
                  name={todo.name}
                  desc={todo.desc}
                  completed={todo.completed}
                  handleCompletedTodo={() =>
                    handleCompletedTodo(todo.id as string)
                  }
                  handleDeleteTodo={() => {
                    handleDeleteTodo(todo.id as string);
                  }}
                  getTodoDatafromchild={() => {
                    getTodoDatafromchild(
                      todo.name as string,
                      todo.desc,
                      todo.id as string
                    );
                  }}
                  handleEditTodoVisible={() => handleEditVisible()}
                />
              );
            })}
          </div>
        )}
      </div>
      <button
        className="bg-yellow-300 p-8 rounded-full fixed hover:scale-110  bottom-10 right-10 active:bg-yellow-800 transition"
        onClick={handleVisible}
      >
        Add
      </button>
    </div>
  );
};

export default TodoList;
