import { JestTestAsyncThunk } from '../../../../../shared/lib/tests/JestTestAsyncThunk/JestTestAsyncThunk';
import { CountryEnum } from '../../../../Country/model/types/country';
import { CurrencyEnum } from '../../../../Currency/model/types/currency';
import { updateProfileData } from './updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: CountryEnum.America,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: CurrencyEnum.USDC,
};

describe('updateProfileData.test', () => {
  test('Success', async () => {
    const thunk = new JestTestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        isReadOnly: true,
        data,
        error: 'error',
      },
    });

    thunk.$api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.$api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
});
