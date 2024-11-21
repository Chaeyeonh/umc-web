import { createContext ,useState,useEffect} from "react";
import { getTodoList, postTodo, deleteTodo, patchTodo } from "../apis/todo";
//데이터를 담고 있음
export const TodoContext = createContext();

//우산을 만듬.
export function TodoContextProvider({children}){
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editTitle, setEditingTitle] = useState(""); // 수정 중인 제목
  const [editContent, setEditingContent] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [isError, setIsError] = useState(false); // 에러 상태

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //1. Todo List 가져오기 (get /todo)
  useEffect(() => {
    console.log("현재 todos 상태:", todos);
    const fetchTodos = async() => {
      setIsLoading(true);
      setIsError(false);
      try{
        const data = await getTodoList({});
        setTodos(data);
      } catch(error){
        setIsError(true);
        console.error("Todo 리스트 가져오기 실패", error);
      } finally{
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []); //컴포넌트 처음 렌더링 시 실행

  //2. Todo 생성(POST/ todo)

  const addTodo = async () => {
    try{
      const newTodo = await postTodo({title, content,checked: false});
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle("");//제목 및 내용 입력 필드 초기화
      setContent("");}

    catch(error){
      console.error("Todo 생성 실패:", error);
    }
  };

  //3. Todo 삭제(delete/ todo/{id})
  const removeTodo = async (id) => {
    try{
      await deleteTodo({id});
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }catch (error){
      console.error("Todo 삭제 실패:", error);
    }
  }

  //4. Todo 수정(patch / todo/{id})
  const updateTodo = async (id, { title, content, checked }) => {
    console.log("updateTodo 호출:", { id, title, content, checked });
    try {
      const updatedTodo = await patchTodo({ id, title, content, checked });
  
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
      );
  
      // 수정 모드 종료 및 필드 초기화
      setEditingId("");
      setEditingTitle("");
      setEditingContent("");
    } catch (error) {
      console.error("Todo 수정 실패:", error);
    }
  };
  
  
  return <TodoContext.Provider value = {{
    todos,setTodos, title,setTitle, content, setContent,editingId,setEditingId,editTitle,setEditingTitle,editContent,setEditingContent,handleSubmit,addTodo,removeTodo,updateTodo
  }}>{children}</TodoContext.Provider>;
}