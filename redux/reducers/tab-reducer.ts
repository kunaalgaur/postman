import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    id: string;
    name: string;
};

const INITIAL_STATE: InitialState[] = [];

const tab = createSlice({
    name: 'TAB REDUCER',
    initialState: INITIAL_STATE,
    reducers: {
        add_tab: (state, action) => {
            const { id, name } = action.payload;
            state.push({ id, name });
        },

        remove_tab: (state, action) => {
            const tabIdToRemove = action.payload;
            const index = state.findIndex((tab) => tab.id === tabIdToRemove);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { add_tab, remove_tab } = tab.actions;
export default tab.reducer;
