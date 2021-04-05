import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Link from 'next/link';
export default function ItemList() {
  const [dataList, setDataList] = useState([]);
  const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const ImgDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  async function getData() {
    // tslint:disable-next-line:no-shadowed-variable
    const getData = await axios.get(apiUrl);
    setDataList(getData.data);
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
          <ImgDiv>
            {dataList.map((data) => {
              return (
                <Link href={`/view/${data.id}`}>
                  <img key={data.id} src={data.image_link} alt="이미지 없음" />
                </Link>
              );
            })}
          </ImgDiv>
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
