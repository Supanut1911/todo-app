export interface ITodo {
  id?: string;
  name: String;
  desc: string;
  completed: boolean;
  handleCompletedTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  getTodoDatafromchild: (name: string, desc: string, id: string) => void;
  handleEditTodoVisible: () => void;
}
