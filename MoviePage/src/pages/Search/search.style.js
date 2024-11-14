import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  input{
  flex:1;
  padding: 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid;
  }

  button{
  width: 80px;
  background-color: #D62069;
  color: white;
  cursor:pointer;
  border:none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;}
`;


export const MovieGridContainer = styled.div`
  margin-top: 30px;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
  gap: 20px;`

export const PosterItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const MovieInfo = styled.div`
  display: block;

`;