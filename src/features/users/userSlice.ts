import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/api";
import { User, UserState } from "../../definitions/types";

export const getUsers = createAsyncThunk<User[]>("users/getUsers", async () => {
  const data = await fetchUsers();
  return data;
});

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
