import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import getPathsForContentType from '../utlis/getPathsForContentType';

const contentful = require('contentful');
export const client = contentful.createClient({
  space: '8jo7zc66kxlt',
  accessToken: 'fmeHOZ-oTBWuxil1CWICXjz3XhM3G2cBZmi44xyqzsU',
});

interface Fields {
  title: string;
  description: string;
  image: any;
}

interface System {
  id: string;
}
interface Item {
  fields: Fields;
  sys: System;
}

const Home: NextPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await client.getEntries({
        content_type: 'productPage',
      });

      setItems(data.items);
      const landingPages = await getPathsForContentType('landingPage');

      console.log(landingPages);
    };

    getItems();
  }, []);

  return (
    <Layout>
      {items.map((item) => (
        <a
          key={item.sys.id}
          href={`/products/${item.sys.id}`}
          style={{ width: '200px', display: 'inline-block', padding: '16px' }}
        >
          <img src={item.fields.image.fields.file.url} alt="" />
          <h4 style={{ textAlign: 'center' }}>{item.fields.title}</h4>
        </a>
      ))}
    </Layout>
  );
};

export default Home;
