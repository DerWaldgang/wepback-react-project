import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername.test', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123',
                isLoading: false,
                password: 'test',
                error: '',
            },
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual('123123');
    });
    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginUsername(state as StateSchema)).toEqual('');
    });
});
