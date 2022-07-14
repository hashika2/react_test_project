import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../action';

const Test = () => {
  const dispatch = useReduxDispatch();
  const { Action1, Action2 } = bindActionCreators(actionCreators, dispatch);

  const accountData = useReduxSelector((state: any) => state);
  return (
    <div>
      <Link to="/home">Home</Link>
      <p>{accountData.account}</p>
      <button onClick={() => Action1(1)}>Click</button>
      <button onClick={() => Action2(1)}>Click</button>
    </div>
  );
};

export default Test;
