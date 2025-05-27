import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        on: state => {
            state.login = true;
        },
        off: state => {
            state.login = false;
        },
    },
});

export const {on, off} = loginSlice.actions;

export default loginSlice.reducer;