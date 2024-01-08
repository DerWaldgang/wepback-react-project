import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import { CountryEnum } from '../../../../Country/model/types/country';
import { CurrencyEnum } from '../../../../Currency/model/types/currency';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm.test', () => {
  test('Should return form', () => {
    const form = {
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
        form,
        isLoading: false,
        isReadOnly: false,
        error: '',
        data: {},
      },
    };
    expect(selectProfileForm(state as StateSchema)).toEqual(form);
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
