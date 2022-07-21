import { FC } from 'react';

const Characters: FC<{ query: string; dataSource: any }> = ({ query, dataSource }) => {
  const { data } = dataSource;

  return (
    <>
      <h2>Character list for query: {query}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {data.map((character: { id: string; name: string; image: string }) => (
          <div
            key={character.id}
            style={{ width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <p>{character.name}</p>
            <img src={character.image} alt="" style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
