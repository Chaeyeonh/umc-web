import styled from 'styled-components';

const Input = ({ label, type, register, placeholder, error }) => (
  <div>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput 
      type={type}
      {...register}
      placeholder={placeholder}
    />
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </div>
);

export default Input;

const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0 0 8px;
`;
