import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spinner } from '@chakra-ui/react';
import Link from 'next/link';

export default function ItemList() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const ImgDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const SpinDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  async function getData() {
    const fetchData = await axios.get(apiUrl);
    setDataList(fetchData.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>Message</Tab>
        <Tab>Friend</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {isLoading ? (
            <SpinDiv>
              <Spinner />
            </SpinDiv>
          ) : (
            <ImgDiv>
              {dataList.map((data) => {
                return (
                  <Link href={`/view/${data.id}`}>
                    <img key={data.id} src={data.image_link} alt="이미지 없음" />
                  </Link>
                );
              })}
            </ImgDiv>
          )}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
