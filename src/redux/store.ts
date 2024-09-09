import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import addReportSlice from "../redux/reducers/addReport";
import updateNav from "./reducers/updateNav";

export const store = configureStore({
  reducer: {
    addReportSlice: addReportSlice,
    updateNav:updateNav
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
