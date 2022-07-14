type HomeType = {
  name: string;
};

export const Home = (home: HomeType) => {
  return <div>{home.name}</div>;
};
