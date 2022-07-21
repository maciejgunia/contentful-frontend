import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/Layout';

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
      Landng pages:
      <ul>
        {items.map((item) => (
          <li key={item.sys.id}>
            <Link href={item.sys.id}>{item.fields.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await client.getEntries({
    content_type: 'landingPage',
  });

  return {
    props: {
      data,
    },
  };
}
