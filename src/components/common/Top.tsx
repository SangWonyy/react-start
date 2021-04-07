import styled from 'styled-components';

const TopContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  padding: 5px;
  width: 60px;
`;
const TextBox = styled.div`
  padding: 5px;
  font-size: 15px;
`;

export default function Top() {
  return (
    <TopContainer>
      <Img src="/assets/shiba.png" alt="이미지 못찾음" />
      <TextBox>React Shopping</TextBox>
    </TopContainer>
  );
}
