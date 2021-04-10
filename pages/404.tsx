import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fd9807;
  font-weight: bold;
`;

const Img = styled.img`
  width: 10%;
  height: 10%;
`;

export default function Error404() {
  return (
    <Container>
      <Img src="/assets/surprised.svg" alt="이미지 찾지 못했어요" />
      여기는 어디지?!! 404 ERROR ...
    </Container>
  );
}
