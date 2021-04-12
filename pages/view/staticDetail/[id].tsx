import Item from '../../../src/components/view/Item';
import axios from 'axios';
import Head from 'next/head';
import { GetServerSideProps, GetStaticProps } from 'next';

interface Props {
  props: {
    item;
    name: string;
  };
}

const GetItem = (props: { item: { name: string; description: string }; name: string }): JSX.Element => {
  debugger;
  return (
    <>
      {props.item && (
        <>
          <Head>
            <title>{props.item.name}</title>
            <meta name="description" content={props.item.description} />
          </Head>
          {props.name} 환경 입니다.
          <Item item={props.item} />
        </>
      )}
    </>
  );
};

export default GetItem;

// fallback - paths에 없는 페이지 대응 유무
// fallback - false : paths에 없는 페이지는 404 에러
export const getStaticPaths: GetStaticProps = async () => {
  return {
    props: {
      paths: [{ params: { id: '749' } }, { params: { id: '738' } }, { params: { id: '729' } }],
      fallback: true
    }
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    }
  };
};
