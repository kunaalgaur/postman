import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    signup: {
        loading: boolean;
        error: any;
    };
    signin: {
        loading: boolean;
        error: any;
        token: string | undefined;
        userId: string | undefined;
    };
    getUser: {
        loading: boolean;
    };
    updateUser: {
        loading: boolean;
    };
    deleteUser: {
        loading: boolean;
    };
    signout: {
        loading: boolean;
    };
};

const INITIAL_STATE = {
    signup: {
        loading: false,
        error: null,
    },
    signin: {
        loading: false,
        error: null,
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
    },
    getUser: {
        loading: false,
    },
    updateUser: {
        loading: false,
    },
    deleteUser: {
        loading: false,
    },
    signout: {
        loading: false,
    },
} as unknown as InitialState;

const user = createSlice({
    name: 'USER REDUCER',
    initialState: INITIAL_STATE,
    reducers: {
        signup_loading_request: (state) => {
            state.signup.loading = true;
            state.signup.error = null;
        },
        signup_loading_success: (state) => {
            state.signup.loading = false;
            state.signup.error = null;
        },
        signup_loading_failure: (state, action) => {
            state.signup.loading = false;
            state.signup.error = action.payload.error;
        },
        signin_loading_request: (state) => {
            state.signin.loading = true;
            state.signin.error = null;
            state.signin.token = undefined;
            state.signin.userId = undefined;
        },
        signin_loading_success: (state, action) => {
            state.signin.loading = false;
            state.signin.error = null;
            state.signin.token = action.payload.token;
            state.signin.userId = action.payload.userId;
        },
        signin_loading_failure: (state, action) => {
            state.signin.loading = false;
            state.signin.error = action.payload.error;
            state.signin.token = undefined;
            state.signin.userId = undefined;
        },
        getUser_loading_start: (state) => {
            state.getUser.loading = true;
        },
        getUser_loading_stop: (state) => {
            state.getUser.loading = false;
        },
        updateUser_loading_start: (state) => {
            state.updateUser.loading = true;
        },
        updateUser_loading_stop: (state) => {
            state.updateUser.loading = false;
        },
        deleteUser_loading_start: (state) => {
            state.deleteUser.loading = true;
        },
        deleteUser_loading_stop: (state) => {
            state.deleteUser.loading = false;
        },
    },
});

export const {
    signin_loading_request,
    signin_loading_success,
    signin_loading_failure,
    signup_loading_request,
    signup_loading_success,
    signup_loading_failure,
    getUser_loading_start,
    getUser_loading_stop,
    updateUser_loading_start,
    updateUser_loading_stop,
    deleteUser_loading_start,
    deleteUser_loading_stop,
} = user.actions;
export default user.reducer;
