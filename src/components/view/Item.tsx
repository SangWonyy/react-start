import { Spinner } from '@chakra-ui/react';
import _ from 'lodash';
import styled from '@emotion/styled';

const SpinDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Item({ item }) {
  if (_.isEmpty(item)) {
    return (
      <SpinDiv>
        <Spinner />
      </SpinDiv>
    );
  }
  return (
    <>
      <ContentDiv>{item.name}</ContentDiv>
      <ContentDiv>
        <img src={item.image_link} />{' '}
      </ContentDiv>
    </>
  );
}
