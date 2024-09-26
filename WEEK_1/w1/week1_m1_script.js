const input = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

//마우스가 taskInput에 들어오면 border 바꾸기
input.addEventListener('mouseenter', function(){
  input.style.borderColor = '#5ea0d3';
  input.style.borderRadius = '5px';
})

//떠나면 원래대로
input.addEventListener('mouseleave', function(){
  input.style.borderColor = 'black';
  input.style.borderRadius = '0px';
})

// 키를 눌렀을 때 (keydown) 발생
input.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);

    if (event.key === 'Enter') {
        
        const taskText = input.value.trim(); // 입력된 값 가져오기 및 공백 제거

            if (taskText !== '') { // 값이 비어있지 않다면
                const listItem = document.createElement('li'); // 새로운 li 요소 생성. 새로운 태그 만들기
                listItem.classList.add('todoItem');//li에 'todoItem'이라는 css클래스 추가
                listItem.textContent = taskText; // 입력된 값을 li에 추가

                //버튼 생성
                const completeButton = document.createElement('button');
                completeButton.textContent = "완료";
                completeButton.classList.add('completeButton');

                //버튼 클릭시 '해낸 일' 목록으로 이동
                completeButton.addEventListener('click',function(){
                  if (completeButton.textContent == "완료"){
                    todoList.removeChild(listItem);
                    doneList.appendChild(listItem);
                    completeButton.textContent = "삭제";
                  }

                  else{
                    doneList.removeChild(listItem);
                  }
                  
                })
                
                // 완료 버튼을 listItem에 추가
                listItem.appendChild(completeButton);

                todoList.appendChild(listItem); // li를 ul에 추가
                input.value = ''; // 입력 필드를 비움

                completeButton.addEventListener('click',function(){
                  todoList.removeChild(listItem);
                  doneList.appendChild(listItem);
                  completeButton.textContent = "삭제";
                })
            }
    }
});