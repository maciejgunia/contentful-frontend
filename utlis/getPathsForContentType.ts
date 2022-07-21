import client from './contentfultClient';

const getPathsForContentType = async (contentType: string) => {
  const data = await client.getEntries({
    content_type: contentType,
  });

  const paths = data.items.map((item: any) => ({
    params: {
      id: item.sys.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default getPathsForContentType;
