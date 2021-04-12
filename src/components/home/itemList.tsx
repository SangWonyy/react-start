import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

const Img = styled.img`
  margin: 0 auto;
`;

const SpinDiv = styled(SimpleGrid)`
  text-align: center;
  width: 100%;
`;

interface parameterInterface {
  id: number;
  image_link: string;
}

export default function ItemList(props: { list: Array<parameterInterface> }) {
  return (
    <>
      <SimpleGrid columns={[3]} spacing="40px">
        {props.list.map((data) => {
          return (
            <Link key={data.id} href={`/view/detail/${data.id}`}>
              <Box>
                <Img key={data.id} src={data.image_link} alt="이미지 없음" />
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    }
  };
};
