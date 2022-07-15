type HomeType = {
  name: string;
};

export const SubHome = (data: any) => {
  return (
    <div>
      <button onClick={data.onCall}> button </button>
      <div>{data.name}</div>
    </div>
  );
};
