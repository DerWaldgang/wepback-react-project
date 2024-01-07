import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectLoginPassword } from './selectLoginPassword';

describe('selectLoginPassword.test', () => {
  test('Should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123123',
        isLoading: false,
        username: 'test',
        error: '',
      },
    };
    expect(selectLoginPassword(state as StateSchema)).toEqual('123123');
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginPassword(state as StateSchema)).toEqual('');
  });
});
