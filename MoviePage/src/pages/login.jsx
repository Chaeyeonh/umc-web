// login.jsx
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LogInPage = () => {
 
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
    password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 반드시 입력해주세요.'),
})

const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
});

const onSubmit = async (data) => {
  try {
    // 로그인 API 요청
    const response = await axios.post('http://localhost:3000/auth/login', {
      email: data.email,
      password: data.password,
    });
    
    // 토큰 저장
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    
    alert("로그인에 성공했습니다!");
    navigate('/'); // 메인 페이지로 이동
  } catch (error) {
    console.error("로그인 실패:", error);
    alert("로그인에 실패했습니다. 다시 시도해주세요.");
  }
};

  return (
    <FormContainer>
 
        <h1>로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Styledinput type={'email'} {...register("email")} placeholder= '이메일을 입력해주세요!'/>
            
            <p style={{color: 'red'}}>{errors.email?.message}</p>
            <Styledinput type={'password'} {...register("password")} placeholder= '비밀번호를 입력해주세요!'/>
            <p style={{color: 'red'}}>{errors.password?.message}</p>
            <LogInButton input type= "submit" disabled={!isValid} value="로그인"/>
        </form>

    </FormContainer>
  );
};

export default LogInPage;

const FormContainer = styled.div`
width: 20vw;
height:100vh;
display:flex;
justify-content: center;
flex-direction: column; 
margin: 0 auto;
text-align: center;
 
`;

const Styledinput = styled.input
`
width: 100%;
padding: 12px;
margin-bottom: 8px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 1rem;
box-sizing: border-box;

&:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}
`;
 
const LogInButton = styled.input`
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