import styled from "styled-components";

export default function Categorybox({ catImg, text }) {
  return (
    <Container>
      <img src={catImg} alt={text} />
      <Textbox>{text}</Textbox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 19vw;
  height: 15vh;
  border-radius: 1rem;
  overflow: hidden;
  object-fit: cover;
  transition: opacity 0.3s;
  position: relative;

  &:hover {
    opacity: 0.6;
  }
`;

const Textbox = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0.5em;
  padding: 0.5rem;
`;