// navbar.jsx
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

//useState로 로그인 상태관리, useEffect로 로컬 스토리지에서 토큰 읽어 로그인 상태 초기화
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 토큰과 사용자 정보 가져오기
    const accessToken = localStorage.getItem('accessToken');
    const user = localStorage.getItem('user');

    if (accessToken && user) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  //로그아웃 버튼 클릭시, 토큰을 삭제하고 로그인 상태와 사용자 이름 초기화
  // 로그인/회원가입 버튼이 다시 보이게
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername(null);
    navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
  };

    return (
      <NavbarDesign>
        <HomeLogo to='/'>YOUNGCHA</HomeLogo>
        {isLoggedIn ? (
          <UserSection>
            <span>{username}님 반갑습니다!</span>
            <StyledButton as="button" onClick={handleLogout}>로그아웃</StyledButton>
          </UserSection>
        ) : (
          <SignupOrLogin>
            <StyledButton to='/login'>로그인</StyledButton>
            <StyledButton to='/signup'>회원가입</StyledButton>
          </SignupOrLogin>
        )}
      </NavbarDesign>
    );
  
};

export default Navbar;

// styled-components로 스타일 정의
const NavbarDesign = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #2e2d2d;
`;

const SignupOrLogin = styled.nav`
  display: flex;
  gap: 20px;
  margin-top: 20px;

`;

const HomeLogo = styled(Link)`  /* Link를 styled-components로 감싸서 스타일 적용 */
  color: #d62069;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;  /* 기본 링크 밑줄 제거 */
`;

const StyledButton = styled(Link)`  /* Link를 버튼처럼 스타일링 */
  background-color: #d62069;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #a81854;
  }
`;

const UserSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
  font-weight: bold;
`;