// import {configureStore} from '@reduxjs/toolkit';

import { applyMiddleware, createStore } from 'redux';
import reducres from './state';
import thunk from 'redux-thunk';
// const store = configureStore({
//     reducer:{

//     }
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

export const store = createStore(reducres, {}, applyMiddleware(thunk));
