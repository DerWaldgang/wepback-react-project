import { CountryEnum } from '../../../../Country/model/types/country';
import { CurrencyEnum } from '../../../../Currency/model/types/currency';
import { getProfileData } from './getProfileData';
import { JestTestAsyncThunk } from '../../../../../shared/lib/tests/JestTestAsyncThunk/JestTestAsyncThunk';

const data = {
  username: 'admin',
  age: 22,
  country: CountryEnum.America,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: CurrencyEnum.USDC,
};

describe('getProfileData.test', () => {
  test('Success', async () => {
    const thunk = new JestTestAsyncThunk(getProfileData);
    thunk.$api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.$api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('Error login', async () => {
    const thunk = new JestTestAsyncThunk(getProfileData);
    thunk.$api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
