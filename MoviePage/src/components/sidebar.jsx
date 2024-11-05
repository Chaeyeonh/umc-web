//sidebar.jsx
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Sidebar = () => {
    return (
        <Nav>
            <StyledLink to='/search'>찾기</StyledLink>
            <StyledLink to='/MovieCategory'>영화</StyledLink>
        </Nav>

    );
};

export default Sidebar;

// styled-components로 스타일링
const Nav = styled.nav`
 width:4vw;
 padding: 2.5vh 5vh;
 padding-left:3vh;

`;

const StyledLink = styled(Link)`
  display: block !important; /* 링크를 세로로 나열 */
  margin-bottom: 10px;  /* 각 링크 간의 간격 */
  text-decoration: none;
  color: white !important;
  font-weight:bold;


`;