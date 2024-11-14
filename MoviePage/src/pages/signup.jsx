// signup.jsx
import { useForm } from 'react-hook-form'; // 폼 데이터 관리
import * as yup from 'yup'; //입력 유효성 검증
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import Input from "../components/Input.jsx";
//import { signupUser } from "../apis/api.js";
import { useState } from 'react';
import axios from "axios";//서버와 http통신
import { useNavigate } from 'react-router-dom';//특정 페이지로 이동

const SignUpPage = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const schema = yup.object().shape({
    Email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
    Password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 반드시 입력해주세요.'),
    PasswordCheck: yup.string()
      .oneOf([yup.ref('Password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 검증 또한 필수 입력요소입니다.')
  });
//handleSubmit: 폼이 제출될 때 onSubmit호출 전 유효성 검사. 유효하면 onSubmit호출
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),//schema에 맞는지 유효성검사
    mode: "onChange"
  });

  
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        email: data.Email,
        password: data.Password,
        passwordCheck: data.PasswordCheck
      });
      console.log('Response:', response);
      alert("회원가입이 완료되었습니다.");
      navigate('/login');
    } catch (error) {
      console.error("회원가입 실패:", error);
      if (error.response) {
        console.error("서버 응답:", error.response.data);
      } else if (error.request) {
        console.error("요청은 보내졌지만 응답을 받지 못했습니다:", error.request);
      } else {
        console.error("요청 설정 중에 오류가 발생했습니다:", error.message);
      }
      alert("회원가입 실패");
    }
  };
  

  return (
    <FormContainer>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          register={register("Email")}
          placeholder="이메일을 입력해주세요!"
          error={errors.Email}
        />
        <Input
          type="password"
          register={register("Password")}
          placeholder="비밀번호를 입력해주세요!"
          error={errors.Password}
        />
        <Input
          type="password"
          register={register("PasswordCheck")}
          placeholder="비밀번호를 다시 입력해주세요!"
          error={errors.PasswordCheck}
        />
        <SignUpButton type="submit" disabled={!isValid} value="제출" />
      </form>
      {message && <p>{message}</p>}
    </FormContainer>
  );
};

export default SignUpPage;

const FormContainer = styled.div`
  width: 20vw;
  height:100vh;
  display:flex;
  justify-content: center;
  flex-direction: column; 
  margin: 0 auto;
  text-align: center;
`;

const SignUpButton = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: ${props => props.disabled ? '#ddd' : '#ed3289'};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.disabled ? '#ddd' : '#3235ed'};
  }
`;
