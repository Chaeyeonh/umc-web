

const CustomButton = () => {
  return (
      <>
        <FirstStyledSweetPotato color={'purple'}>
                고구마
        </FirstStyledSweetPotato>
        <FirstStyledSweetPotato color={'red'}>
                고구마
        </FirstStyledSweetPotato>
      </>
  );
};

export default CustomButton;

// 스타일 요소 정의하기
//styled.태그명 다음 백틱 (``)으로 스타일 지정
const FirstStyledSweetPotato = styled.button`
    background-color: ${props => props.color || 'purple'};
    border: none;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    color: white;`

const StyledHoverButton = styled.button`
&:hover {
		// 밑줄을 부여한다.
		text-decoration: underline;
	}`