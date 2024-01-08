import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { CountryEnum } from '../../../../Country/model/types/country';
import { CurrencyEnum } from '../../../../Currency/model/types/currency';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData.test', () => {
  test('Should return data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: CountryEnum.America,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: CurrencyEnum.USDC,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
        isLoading: false,
        isReadOnly: false,
        error: '',
      },
    };
    expect(selectProfileData(state as StateSchema)).toEqual(data);
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileData(state as StateSchema)).toEqual(undefined);
  });
});
