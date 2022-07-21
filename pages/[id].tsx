import { client } from '.';
import Layout from '../components/Layout';
import componentMapper from '../utlis/componentMapper';
import dataSourceMapper from '../utlis/dataSourceMapper';

export default function Page({ data, dataSources }: any) {
  return <Layout>{componentMapper(data, dataSources)}</Layout>;
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await client.getEntry(id);

  const dataSources = await Promise.all(dataSourceMapper(data));

  return {
    props: {
      data,
      dataSources,
    },
  };
}
