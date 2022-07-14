import type { NextPage } from 'next';
import Link from 'next/link';
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

interface AppProps {
  data: {
    items: Item[];
  };
}

const Home: NextPage<AppProps> = ({ data }) => {
  const { items } = data;
  return (
    <Layout>
      {items.map((item: Item) => (
        <div key={item.sys.id} style={{ width: '200px', display: 'inline-block', padding: '16px' }}>
          <Link href={`/products/${item.sys.id}`}>
            <img src={item.fields.image.fields.file.url} alt="" style={{ cursor: 'pointer' }} />
          </Link>
          <h4 style={{ textAlign: 'center' }}>{item.fields.title}</h4>
        </div>
      ))}
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'productPage',
  });

  return {
    props: {
      data,
    },
  };
}
