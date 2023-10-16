import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    createCollection: {
        loading: boolean;
    };
    getAllCollection: {
        loading: boolean;
    };
    updateCollection: {
        loading: boolean;
    };
    deleteCollection: {
        loading: boolean;
    };
};

const INITIAL_STATE = {
    createCollection: {
        loading: false,
    },
    getAllCollection: {
        loading: false,
    },
    updateCollection: {
        loading: false,
    },
    deleteCollection: {
        loading: false,
    },
} as unknown as InitialState;

const collection = createSlice({
    name: 'COLLECTION',
    initialState: INITIAL_STATE,
    reducers: {
        createCollection_loading_start: (state) => {
            state.createCollection.loading = true;
        },
        getAllCollection_loading_start: (state) => {
            state.getAllCollection.loading = true;
        },
        updateCollection_loading_start: (state) => {
            state.updateCollection.loading = true;
        },
        deleteCollection_loading_start: (state) => {
            state.deleteCollection.loading = true;
        },
        createCollection_loading_stop: (state) => {
            state.createCollection.loading = false;
        },
        getAllCollection_loading_stop: (state) => {
            state.getAllCollection.loading = false;
        },
        updateCollection_loading_stop: (state) => {
            state.updateCollection.loading = false;
        },
        deleteCollection_loading_stop: (state) => {
            state.deleteCollection.loading = false;
        },
    },
});

export const {
    getAllCollection_loading_start,
    getAllCollection_loading_stop,
    createCollection_loading_start,
    createCollection_loading_stop,
    updateCollection_loading_start,
    updateCollection_loading_stop,
    deleteCollection_loading_start,
    deleteCollection_loading_stop,
} = collection.actions;
export default collection.reducer;
