import Item from '../../../src/components/view/Item';
import axios from 'axios';
import Head from 'next/head';

interface Props {
  props: {
    item;
    name: string;
  };
}

const GetItem = ({ item, name }): JSX.Element => {
  debugger;
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default GetItem;

export async function getServerSideProps(context): Promise<Props> {
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
}
