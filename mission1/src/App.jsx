import './App.css';
import { useState } from 'react';
import Button from './components/Button'; // 분리된 Button 컴포넌트
import Input from './components/Input';   // 분리된 Input 컴포넌트

function App() {
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

  return (
    <>
      <div className = "container">
        <div className= "title">
          <h1>ToDoList</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="form-container">
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input-field"
          />
          <Button onClick={addTodo} label="할 일 등록" className="add-button" />
        </form>

        <div>
          {todos.map(({ id, task }) => (
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
                    onClick={() => updateTodo(editingId, editText)}
                    label="수정 완료"
                    className="edit-button"
                  />
                ) : (
                  <Button
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
      
    </>
  );
}

export default App;
