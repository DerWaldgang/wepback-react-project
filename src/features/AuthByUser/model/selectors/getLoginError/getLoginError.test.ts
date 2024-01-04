import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('Shoul return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Test error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('Test error');
    });

    test('Shoul work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
