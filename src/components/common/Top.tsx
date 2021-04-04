import styled from 'styled-components';
import CommonDiv from '../../styles/component/common';

export default function Top() {
  const TopStyle = styled.div`
    background: green;
  `;
  return (
    <CommonDiv>
      <TopStyle>나는 Top</TopStyle>
    </CommonDiv>
  );
}
