// signup.jsx
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';
import Input from "../components/Input.jsx";

const SignUpPage = () => {
 
  const schema = yup.object().shape({
    Email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
    Password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 반드시 입력해주세요.'),
    PasswordCheck: yup.string()
  .oneOf([yup.ref('Password'), null], '비밀번호가 일치하지 않습니다.')
  .required('비밀번호 검증 또한 필수 입력요소입니다.')

})

const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
});

const onSubmit = (data) => {
    console.log('폼 데이터 제출')
    console.log('폼 데이터 제출:', data);
}
  return (
    <FormContainer>
 
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          label="이메일" 
          type="email" 
          register={register("Email")} 
          placeholder="이메일을 입력해주세요!"
          error={errors.Email}
        />
        <Input 
          label="비밀번호" 
          type="password" 
          register={register("Password")} 
          placeholder="비밀번호를 입력해주세요!"
          error={errors.Password}
        />
        <Input 
          label="비밀번호 확인" 
          type="password" 
          register={register("PasswordCheck")} 
          placeholder="비밀번호를 다시 입력해주세요!"
          error={errors.PasswordCheck}
        />
            <SignUpButton input type= "submit" disabled={!isValid} value="회원가입"/>
        </form>

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