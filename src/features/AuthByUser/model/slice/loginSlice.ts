import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/LoginByUsername/LoginByUsername';

import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
