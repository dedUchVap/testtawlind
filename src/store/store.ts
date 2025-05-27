import {configureStore} from "@reduxjs/toolkit";
import loginReducer from  "../features/login/loginReg.ts";


export const store = configureStore({
    reducer: {
        loginModal: loginReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;