import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectProfileReadMode } from './selectProfileReadMode';

describe('selectProfileReadMode.test', () => {
  test('Should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {},
        isLoading: false,
        isReadOnly: true,
        error: '',
        data: {},
      },
    };
    expect(selectProfileReadMode(state as StateSchema)).toEqual(true);
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileReadMode(state as StateSchema)).toEqual(undefined);
  });
});
