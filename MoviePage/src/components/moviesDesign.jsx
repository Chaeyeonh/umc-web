import styled from 'styled-components';

const MoviesDesign = ({ children }) => {
  return (
    <PosterContainer>
      {children}  {/* MoviesPage 컴포넌트에서 전달된 자식 요소들 (포스터 아이템들) */}
    </PosterContainer>
  );
};

export default MoviesDesign;

// styled-components로 스타일 정의
const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);  /* 한 줄에 10개의 포스터 */
  gap: 10px;  /* 포스터 간격 */
  justify-content: center;
  margin-top: 20px;
`;

