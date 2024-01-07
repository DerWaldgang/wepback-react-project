import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ReduxProvider';
import { Profile } from '../../types/profile';

export const getProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/getProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.$api.get<Profile>('/profile');

      return response.data;
    } catch (error) {
      console.error('Error in getProfileData.ts ', error);
      return rejectWithValue('Error');
    }
  },
);
