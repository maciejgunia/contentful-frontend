import { client } from '.';
import Layout from '../components/Layout';
import getPathsForContentType from '../utlis/getPathsForContentType';

export default function Post({ data }: { data: any }) {
  return (
    <Layout>
      <h2>{data.fields.title}</h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  return getPathsForContentType('landingPage');
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await client.getEntry(id);

  return {
    props: {
      data,
    },
  };
}
