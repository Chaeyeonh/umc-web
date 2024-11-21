import './App.css';
import { useContext } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { TodoContext } from './context/TodoContext';

function App() {
  const {
    todos,
    title,
    setTitle,
    content,
    setContent,
    editingId,
    setEditingId,
    editTitle,
    setEditingTitle,
    editContent,
    setEditingContent,
    handleSubmit,
    addTodo,
    removeTodo,
    updateTodo,
  } = useContext(TodoContext);

  const handleCheckboxChange = async (id, checked) => {
    console.log("체크박스 클릭됨:", { id, checked });
  
    // Find the todo object
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      console.error(`Todo with id ${id} not found`);
      return;
    }
  
    try {
      // Update the todo with the new checked value
      await updateTodo({
        id: todo.id,
        title: todo.title,
        content: todo.content,
        checked: !checked, // Toggle checked status
      });
    } catch (error) {
      console.error("체크박스 상태 업데이트 실패:", error);
    }
  };
  

  return (
    <div className="todolist-container">
      <div className="container">
        <div className="title">
          <h1>ToDoList</h1>
        </div>

        {/* Todo 입력 폼 */}
        <form onSubmit={handleSubmit} className="form-container">
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            placeholder="제목 입력"
          />
          <Input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="input-field"
            placeholder="내용 입력"
          />
          <Button onClick={addTodo} label="할 일 등록" className="add-button" />
        </form>

        {/* Todo 리스트 렌더링 */}
        <div>
          {todos.length > 0 ? (
            todos.map(({ id, title, content, checked }) => (
              <div key={id} className="todo-item">
                {/* 체크박스 추가 */}
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleCheckboxChange(id, checked)}
                />
                {editingId !== id && (
                  <div className="todo-id-task">
                    <p>{title}</p> {/* 제목 출력 */}
                    <p>{content}</p> {/* 내용 출력 */}
                  </div>
                )}

                {editingId === id && (
                  <div className="todo-id-task">
                    <Input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="edit-input"
                      placeholder="제목 수정"
                    />
                    <Input
                      type="text"
                      value={editContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      className="edit-input"
                      placeholder="내용 수정"
                    />
                  </div>
                )}

                <div className="button-group">
                  <Button
                    onClick={() => removeTodo(id)}
                    label="삭제하기"
                    className="delete-button"
                  />
                  {editingId === id ? (
                    <Button
                      onClick={updateTodo}
                      label="수정 완료"
                      className="edit-button"
                    />
                  ) : (
                    <Button
                      onClick={() => {
                        setEditingId(id);
                        setEditingTitle(title);
                        setEditingContent(content);
                      }}
                      label="수정"
                      className="edit-button"
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>할 일이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
