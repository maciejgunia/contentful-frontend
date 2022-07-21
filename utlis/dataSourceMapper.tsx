const dataSourceMap = {
  charactersComponent: async ({ fields, sys }: any) => {
    const { query } = fields;
    const { id } = sys;
    const res = await fetch(`https://rickandmortyapi.com/api/character?name=${query}`);
    const data = await res.json();

    return {
      id,
      data: data.results,
    };
  },
};

const dataSourceMapper = (data: any) => {
  return data.fields.body
    .map((body: any): any => {
      const index = body.sys.contentType.sys.id as keyof typeof dataSourceMap;
      return typeof dataSourceMap[index] !== 'undefined' && dataSourceMap[index](body);
    })
    .filter((item: any) => item !== false);
};

export default dataSourceMapper;
