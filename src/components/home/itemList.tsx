import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { SimpleGrid, Box } from '@chakra-ui/react';

const Img = styled.img`
  margin: 0 auto;
`;

const SpinDiv = styled(SimpleGrid)`
  text-align: center;
  width: 100%;
`;

export default function ItemList() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  async function getData() {
    const fetchData = await axios.get(apiUrl);
    setDataList(fetchData.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <SpinDiv>
          <Spinner />
        </SpinDiv>
      ) : (
        <SimpleGrid columns={[3]} spacing="40px">
          {dataList.map((data) => {
            return (
              <Link href={`/view/detail/${data.id}`}>
                <Box>
                  <Img key={data.id} src={data.image_link} alt="이미지 없음" />
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
}
