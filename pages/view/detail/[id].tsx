import Item from '../../../src/components/view/Item';
import axios from 'axios';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

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
export const getServerSideProps: GetServerSideProps = async (context) => {
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
