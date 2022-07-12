export const Action1 = (action: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'Type1',
      payload: action
    });
  };
};

export const Action2 = (action: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'Type2',
      payload: action
    });
  };
};
