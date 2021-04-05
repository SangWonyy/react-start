import { useRouter } from 'next/router';
import Item from '../../src/components/view/Item';
import axios from 'axios';
import { useEffect, useState } from 'react';
const GetItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}`;
  const [item, setItem] = useState({});
  debugger;
  async function getData() {
    // tslint:disable-next-line:no-shadowed-variable
    const getData = await axios.get(apiUrl);
    setItem(getData.data);
  }

  useEffect(() => {
    getData();
  }, []);
  return <Item item={item} />;
};

export default GetItem;
