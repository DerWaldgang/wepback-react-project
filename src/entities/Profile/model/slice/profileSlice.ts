import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getProfileData } from '../services/getProfileData/getProfileData';
import { Profile, ProfileSchema } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  isReadOnly: true,
  data: undefined,
  form: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnlyMode: (state, action: PayloadAction<boolean>) => {
      state.isReadOnly = action.payload;
    },
    setProfileDataEdit: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    setCancelProfileDataEdit: (state) => {
      state.isReadOnly = true;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(getProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.isReadOnly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
