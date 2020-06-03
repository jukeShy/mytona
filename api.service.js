import fetch from 'isomorphic-unfetch';

const ApiService = () => {
  const baseUrl = 'https://rickandmortyapi.com/graphql';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  const get = async (query) => {
    const res = await fetch(baseUrl, {
      ...options,
      body: JSON.stringify(query),
    });

    return await res.json();
  };

  return { get };
};

export { ApiService };
