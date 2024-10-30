import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';


const RootLayout = () => {
    return (
    
         <Container>
          <NavbarWrapper>
            <Navbar />  {/* 최상단에 Navbar */}
          </NavbarWrapper>
          <MainContent>
            <SidebarWrapper>
              <Sidebar />  {/* 왼쪽에 Sidebar */}
            </SidebarWrapper>
            <OutletWrapper>
              <Outlet />  {/* 오른쪽에 Outlet */}
            </OutletWrapper>
          </MainContent>
        </Container>

     
    );
  };
  
  export default RootLayout;
  


  // Flexbox를 사용한 스타일링
  const Container = styled.div`
    display: flex;
    flex-direction: column;  /* Navbar는 세로로 먼저 배치 */
    height: 100vh;
    width: 100vw;
    color:white;
  `;
  
  const NavbarWrapper = styled.div`
    flex-shrink: 0;  /* Navbar는 고정 크기로 */
    background-color: #2e2d2d;
    padding:25px;
    align-content:center;
  `;
  
  const MainContent = styled.div`
    display: flex;
    flex: 1;
      /* Sidebar와 Outlet은 가로로 배치 */
  `;
  
  const SidebarWrapper = styled.div`
    flex-basis: 100px;  /* Sidebar의 고정 너비 */
    background-color: #2e2d2d;
    padding: 30px;
    display:block;
  `;
  
  const OutletWrapper = styled.div`
    flex-grow: 1;  /* Outlet은 남은 공간을 차지 */
    background-color: black;
    padding: 0 30px ;

  `;
