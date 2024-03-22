import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app-reducer";
import converterReducer from "./converter-reducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    converter: converterReducer
  }
});

export default store;