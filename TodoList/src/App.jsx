import './App.css';
import { useContext} from 'react';
import Button from './components/Button'; // 분리된 Button 컴포넌트
import Input from './components/Input';   // 분리된 Input 컴포넌트
import { TodoContext } from './context/TodoContext';

function App() {
  const{todos,text,setText,editingId,setEditingId,editText,setEditText,handleSubmit,addTodo,deleteTodo,updateTodo} = useContext(TodoContext);
  return (
    <div className = "todolist-container">
      <div className = "container">
        <div className= "title">
          <h1>ToDoList</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="form-container">
          <Input
            type="text"
            value={text}
            //onChange는 html input값이 변경될 때 발생하는 이벤트 핸들러
            //e는 사용자가 타이핑하면 그 이벤트가 e로 전달
            //e.target.value는 사용자가 입력한 값
            onChange={(e) => setText(e.target.value)}
            className="input-field"
          />
          <Button onClick={addTodo} label="할 일 등록" className="add-button" />
        </form>

  
        <div>
        
          {todos.map(({ id, task }) => (
            //key는 리스트를 렌더링할 때 각 항목의 고유한 식별자
            //id가 각 투두 항목의 고유 id로 사용됨
            //수정 중이 아닌 id라면 렌더링
            <div key={id} className="todo-item">
    
              {editingId !== id && (
                <div className="todo-id-task">
                  <p>{id}.</p>
                  <p>{task}</p>
                </div>
              )}
              
              {editingId === id && (
                <div className="todo-id-task">
                  <p>{id}.</p>
                  <Input
                    defaultValue={task}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                </div>
              )}

              <div className="button-group">
                <Button onClick={() => deleteTodo(id)} label="삭제하기" className="delete-button" />

                {editingId === id ? (
                  <Button
                  //updateTodo하면 setEditing('')돼서 수정모드 종료 -> editingId가 다시 빈 문자열돼서 수정 진행 버튼으로 다시 전환
                    onClick={() => updateTodo(editingId, editText)}
                    label="수정 완료"
                    className="edit-button"
                  />
                ) : (
                  <Button
                  // 수정진행 버튼을 누르면, 그 항목의 id값이 editingId에 저장, 재렌더링
                    onClick={() => setEditingId(id)}
                    label="수정 진행"
                    className="edit-button"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}

export default App;
