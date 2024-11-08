import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICountDataInterface {
  count: number | string | null;
  loading: boolean;
  error: null | string | PayloadAction;
}

const initialState: ICountDataInterface = {
  count: null,
  loading: false,
  error: null,
};

export const getHoleDataCounts = createAsyncThunk("/getData", async () => {
  const url = "https://buldum.info/api/v1/reports";
  return fetch(url).then((res) => res.json());
});

const holeReports = createSlice({
  name: "holeReports",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHoleDataCounts.fulfilled, (state, action) => {
      state.error = null;
      state.loading = true;
      state.count = action.payload.count;
    });
  },
});

export default holeReports.reducer;
