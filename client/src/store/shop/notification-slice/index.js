import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/shop/notifications/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createNotification = createAsyncThunk(
  "notifications/createNotification",
  async ({ userId, message }, thunkAPI) => {
    try {
      const response = await axios.post("/api/admin/notifications", {
        userId,
        message,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
    loading: false,
    error: null,
  },
  reducers: {
    markNotificationRead(state, action) {
      const id = action.payload;
      const notification = state.notifications.find((n) => n._id === id);
      if (notification) {
        notification.read = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch notifications";
      });
  },
});

export const { markNotificationRead } = notificationSlice.actions;

export default notificationSlice.reducer;
