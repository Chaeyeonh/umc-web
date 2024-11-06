
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';

const SignInPage = () => {
 
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password1: yup.string().min(8).max(16).required(),
    password2: yup.string().min(8).max(16).required(),
})

const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
});

const onSubmit = (data) => {
    console.log('폼 데이터 제출')
    console.log(data);
}
  return (
    <FormContainer>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type={'email'} {...register("email")}/>
          
          <p style={{color: 'red'}}>{errors.email?.message}</p>
          <input type={'password1'} {...register("password1")}/>
          <p style={{color: 'red'}}>{errors.password1?.message}</p>
          <input type={'password2'} {...register("password2")}/>
          <p style={{color: 'red'}}>{errors.password2?.message}</p>
          <input type= "submit" value="제출"/>
      </form>
    </FormContainer>
    
      
  );
};

export default SignInPage;

const FormContainer = styled.div`
width: 30vw;
height:30vh;
display:block;
justify-content: center;
margin: 100px 300px;
 
`;