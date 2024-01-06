import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectLoginError } from './selectLoginError';

describe('selectLoginError.test', () => {
    test('Shoul return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Test error',
                isLoading: false,
                password: 'test',
                username: 'test',
            },
        };
        expect(selectLoginError(state as StateSchema)).toEqual('Test error');
    });

    test('Shoul work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginError(state as StateSchema)).toEqual(undefined);
    });
});
