import styled from 'styled-components';
import { Box, SimpleGrid, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Link from 'next/link';

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
    <div>
      <TopContainer>
        <Img src="/assets/shiba.png" alt="이미지 못찾음" />
        <TextBox>React Shopping</TextBox>
      </TopContainer>
      <Tabs>
        <TabList>
          <Link href="/">
            <Tab>Home</Tab>
          </Link>
          <Link href="/view/tab/about">
            <Tab>about</Tab>
          </Link>
          <Link href="/where">
            <Tab>Friend</Tab>
          </Link>
        </TabList>
      </Tabs>
    </div>
  );
}
