import { DeepPartial } from '@reduxjs/toolkit';
import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import {
  profileActions, profileReducer, ProfileSchema, updateProfileData,
} from 'entities/Profile';

const data = {
  username: 'admin',
  age: 22,
  country: CountryEnum.America,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: CurrencyEnum.USDC,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { isReadOnly: false };
    expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnlyMode(true),
    )).toEqual({ isReadOnly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

    expect(profileReducer(
            state as ProfileSchema,
            profileActions.setCancelProfileDataEdit(),
    )).toEqual({
      isReadOnly: true,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(profileReducer(
            state as ProfileSchema,
            profileActions.setProfileDataEdit({
              username: '123456',
            }),
    )).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      isReadOnly: true,
      form: data,
      data,
    });
  });
});
