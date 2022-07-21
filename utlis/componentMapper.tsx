import Link from 'next/link';
import Characters from '../components/Characters';
import Product from '../components/Product';

const componentMap = {
  productPage: (data: any) => <Product key={data.sys.id} {...data.fields} />,
  charactersComponent: (data: any, dataSource: any) => {
    return <Characters key={data.sys.id} {...data.fields} dataSource={dataSource} />;
  },
  headerComponent: (data: any) => (
    <div key={data.sys.id}>
      <h1>
        <Link href="/">Home</Link>
      </h1>
    </div>
  ),
  footerComponent: (data: any) => <div key={data.sys.id}>this is footer</div>,
};

const componentMapper = (data: any, dataSources: any) => {
  return data.fields.body.map((body: any): JSX.Element | false => {
    const index = body.sys.contentType.sys.id as keyof typeof componentMap;
    return (
      typeof componentMap[index] !== 'undefined' &&
      componentMap[index](
        body,
        dataSources.find((source: any) => source.id === body.sys.id),
      )
    );
  });
};

export default componentMapper;
