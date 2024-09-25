import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import addReportSlice from "../redux/reducers/addReport";
import updateNav from "./reducers/updateNav";
import allReports from "./reducers/allReports";
import holeReportsCount from "./reducers/holeReportsCount";
import updateCategory from "./reducers/updateCategory";

export const store = configureStore({
  reducer: {
    addReportSlice: addReportSlice,
    updateNav:updateNav,
    allReports:allReports,
    holeReports:holeReportsCount,
    updateCategory:updateCategory
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
