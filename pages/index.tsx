import Head from 'next/head';
import ItemList from '../src/components/home/itemList';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <ItemList />
    </div>
  );
}
