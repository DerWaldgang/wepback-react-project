import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError.test', () => {
  test('Should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
        data: {},
        isLoading: false,
        isReadOnly: false,
        form: {},
      },
    };
    expect(selectProfileError(state as StateSchema)).toEqual('error');
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileError(state as StateSchema)).toEqual(undefined);
  });
});
