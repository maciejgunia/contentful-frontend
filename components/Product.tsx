import { FC } from 'react';

const Product: FC<{ title: string; description: string; image: any }> = ({ title, description, image }) => {
  return (
    <div style={{ width: '300px' }}>
      <p>{title}</p>
      <p>{description}</p>
      <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src={image.fields.file.url} />
    </div>
  );
};

export default Product;
