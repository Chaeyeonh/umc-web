import { createContext ,useState} from "react";

//데이터를 담고 있음
export const TodoContext = createContext();

//우산을 만듬.
export function TodoContextProvider({children}){
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '강아지 고양이 토끼 뱀' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText(''); // 입력 필드 초기화
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return <TodoContext.Provider value = {{
    todos,setTodos,text,setText,editingId,setEditingId,editText,setEditText,handleSubmit,addTodo,deleteTodo,updateTodo
  }}>{children}</TodoContext.Provider>;
}