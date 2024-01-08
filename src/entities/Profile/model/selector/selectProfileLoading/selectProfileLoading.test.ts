import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { selectProfileLoading } from './selectProfileLoading';

describe('selectProfileLoading.test', () => {
  test('Should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {},
        isLoading: true,
        isReadOnly: false,
        error: '',
        data: {},
      },
    };
    expect(selectProfileLoading(state as StateSchema)).toEqual(true);
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
