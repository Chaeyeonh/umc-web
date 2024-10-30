// navbar.jsx
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarDesign>
            <HomeLogo to={'/'}>YOUNGCHA</HomeLogo>
                <SignupOrLogin>
                    <StyledButton to='/login'>로그인</StyledButton>
                    <StyledButton to='/signup'>회원가입</StyledButton>
                </SignupOrLogin>
            
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