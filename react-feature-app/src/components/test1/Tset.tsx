import React from 'react';
import { startTransition } from 'react';
import { useDispatch, useDispatch as useReduxDispatch, useSelector as useReduxSelector, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../../action';

const Test = () => {
    const dispatch = useDispatch();
    const {Action1, Action2} = bindActionCreators(actionCreators,dispatch);
    // const myref = React.createRef()
    // // Urgent: Show what was typed
    // console.log(myref)

// Mark any non-urgent state updates inside as transitions
// startTransition(() => {
//   // Transition: Show the results
//     console.log('test2');
// });

const accountData = useSelector((state: any) => state)    
    return(
        <div>
            <p>{accountData.account}</p>
            <button onClick={()=> Action1(1)}>Click</button>
            <button onClick={()=> Action2(1)}>Click</button>
        </div>
    )
}

export default Test;