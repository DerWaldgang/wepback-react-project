import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123123');
    });
    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
