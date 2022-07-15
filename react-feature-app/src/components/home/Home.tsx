import { SubHome } from './SubHome';

type HomeType = {
  name: string;
};

export const Home = (home: HomeType) => {
  const onClickButton = () => {
    console.log('*********');
  };
  return (
    <div>
      <SubHome onCall={onClickButton} name="SubHome" />
    </div>
  );
};
