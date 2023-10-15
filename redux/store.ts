import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user-reducer';
import tabReducer from './reducers/tab-reducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        tab: tabReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
