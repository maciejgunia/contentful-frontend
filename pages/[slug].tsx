import Layout from '../components/Layout';
import componentMapper from '../utlis/componentMapper';
import client from '../utlis/contentfulClient';
import dataSourceMapper from '../utlis/dataSourceMapper';

export default function Page({ data, dataSources }: any) {
  return <Layout>{componentMapper(data, dataSources)}</Layout>;
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entries = await await client.getEntries({
    content_type: 'landingPage',
    'fields.slug': slug,
  });
  const data = entries.items[0];
  const dataSources = await Promise.all(dataSourceMapper(data));

  return {
    props: {
      data,
      dataSources,
    },
  };
}
