import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectLoginLoading } from './selectLoginLoading';

describe('selectLoginLoading.test', () => {
    test('Should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
                password: 'test',
                username: 'test',
                error: '',
            },
        };
        expect(selectLoginLoading(state as StateSchema)).toEqual(true);
    });
    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginLoading(state as StateSchema)).toEqual(false);
    });
});
