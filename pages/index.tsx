import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/Layout';
import client from '../utlis/contentfultClient';

interface Fields {
  title: string;
  slug: string;
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
            <Link href={item.fields.slug}>{item.fields.title}</Link>
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
