import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ReduxProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsername,
    ThunkConfig<string>
 >(
     'login/loginByUsername',
     async ({ username, password }, thunkApi) => {
         const { rejectWithValue, dispatch, extra } = thunkApi;
         try {
             const response = await extra.$api.post<User>('/login', {
                 username,
                 password,
             });
             if (!response.data) {
                 throw new Error();
             }
             localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
             dispatch(userActions.setAuthData(response.data));

             return response.data;
         } catch (error) {
             console.log('Error in loginByUsername.ts ', error);
             return rejectWithValue('Error');
         }
     },
 );
