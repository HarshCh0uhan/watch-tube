import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"

console.log("appReducer:", appReducer);
console.log("typeof appReducer:", typeof appReducer);


const store = configureStore({
    reducer: {
        app: appReducer
    }
});

export default store;