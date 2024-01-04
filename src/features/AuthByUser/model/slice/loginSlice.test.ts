import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('Test setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'username',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test username'))).toEqual({
            username: 'test username',
        });
    });
    test('Test setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'password',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('test password'))).toEqual({
            password: 'test password',
        });
    });
});
