import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISendReport {
  loading: boolean;
  error: string | null | undefined;
  data: number | null | PayloadAction;
}

const initialState: ISendReport = {
  loading: false,
  error: null,
  data: null,
};

export const sendReport = createAsyncThunk("/postReport", async () => {
  return 5;
});

const addReportSlice = createSlice({
  name: "addReportSlice",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendReport.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default addReportSlice.reducer;
