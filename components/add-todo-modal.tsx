import { FC, useEffect, useState } from "react";

interface Props {
  visible: boolean;
  handleAddTodo: (name: string, desc: string) => void;
  handleVisible: () => void;
}

const AddTodoModal: FC<Props> = (props): JSX.Element => {
  const { visible, handleAddTodo, handleVisible } = props;
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const cleanupInput = () => {
    setName("");
    setDesc("");
  };

  return (
    <>
      {visible && (
        <div>
          <div className="max-w-lg w-full bg-white m-auto left-0 right-0 absolute shadow-md">
            <div className="flex flex-col">
              <div className="bg-blue-500 w-full p-4 relative">
                <p className="text-xl font-bold text-center text-white">
                  Add todo
                </p>
                <button
                  className="bg-red-400 right-3 top-3 absolute p-1 rounded-full"
                  onClick={(e) => {
                    handleVisible();
                    cleanupInput();
                  }}
                >
                  close
                </button>
              </div>
              <div className="w-full flex p-4  space-x-14">
                <p>Name</p>
                <input
                  className="w-full border"
                  value={name}
                  placeholder="input todo name ..."
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="flex  p-4 space-x-4">
                <span className="">Description</span>
                <textarea
                  className="w-full h-20 border"
                  value={desc}
                  placeholder="input todo description ..."
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center m-4">
                <button
                  className="bg-green-400 p-2 rounded-lg w-[100px] active:bg-green-800 transition"
                  onClick={(e) => {
                    handleAddTodo(name, desc);
                    cleanupInput();
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTodoModal;
