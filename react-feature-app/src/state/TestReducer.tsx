interface State {
    type: string,
    name: string
}

interface Type1 {
    type: "Type1";
    payload: string
}

interface Type2 {
    type: "Type2";
    payload: string
}

type Action = Type1 | Type2;

const reducer = (state: State, action: Action) => {
    switch(action.type){
        case 'Type1':
            return state + action.payload;
        case 'Type2':
            return state + action.payload;
        default:
            return state;
            
    }
}

export default reducer;