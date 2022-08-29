import { configureStore } from "@reduxjs/toolkit";
import reducer from './actionSlice'


export const mystore = configureStore({

    reducer: {
        mainStore: reducer
    }
})


