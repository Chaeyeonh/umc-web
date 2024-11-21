import axiosInstance from "./axiosInstance.js";
console.log("Axios Instance:", axiosInstance);

//TODO 생성
const postTodo = async ({title, content, checked = false}) => {
  const {data} = await axiosInstance. post('/todo', {
    title,content, checked ,
  });

  return data;
};

//TODO List가져오기 (title)
const getTodoList = async({title}) => {
  let url = "/todo";
  //title이 있는 경우에만...
  if (title){
    url += `?title=${title}`;
  }
  const{data} = await axiosInstance.get(url);
  return data;
}
//TODO: TODO 단건 가져오기
const getTodo = async({id}) => {
  
  const{data} = await axiosInstance.get(`/todo/${id}`);
  return data;
}

//TODO 수정하기
const patchTodo = async ({ id, title, content, checked }) => {
  try {
    const requestBody = {};
    if (title !== undefined) requestBody.title = title;
    if (content !== undefined) requestBody.content = content;
    if (checked !== undefined) requestBody.checked = checked;

    console.log("PATCH 요청 데이터:", requestBody); // 디버깅용

    const { data } = await axiosInstance.patch(`/todo/${id}`, requestBody);

    console.log("PATCH 응답 데이터:", data); // 디버깅용
    return data;
  } catch (error) {
    console.error("patchTodo 에러:", error);
    throw error;
  }
};

//TODO 삭제하기
const deleteTodo = async({id}) => {
  
  const{data} = await axiosInstance.delete(`/todo/${id}`);
  return data;
}

export {postTodo, getTodo, getTodoList, patchTodo, deleteTodo};