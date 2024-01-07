import { userActions } from 'entities/User';
import { JestTestAsyncThunk } from 'shared/lib/tests/JestTestAsyncThunk/JestTestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  test('Should be fulfilled', async () => {
    const userValue = {
      username: 'admin',
      id: '1',
    };

    const thunk = new JestTestAsyncThunk(loginByUsername);

    thunk.$api.post.mockReturnValue(Promise.resolve({
      data: userValue,
    }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.$api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userValue);
  });

  test('Should be rejected', async () => {
    const thunk = new JestTestAsyncThunk(loginByUsername);
    thunk.$api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.$api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
  });
});

// describe('loginByUsername.test', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;

//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     });

//     test('Should be fulfilled', async () => {
//         const userValue = {
//             username: 'admin',
//             id: '1',
//         };

//         mockedAxios.post.mockReturnValue(Promise.resolve({
//             data: userValue,
//         }));
//         const action = loginByUsername({ username: '123', password: '123' });
//         const result = await action(dispatch, getState, undefined);
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//         expect(dispatch).toHaveBeenCalledTimes(3);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(result.payload).toBe(userValue);
//     });

//     test('Should be rejected', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({
//             status: 403,
//         }));
//         const action = loginByUsername({ username: '123', password: '123' });
//         const result = await action(dispatch, getState, undefined);
//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('Error');
//     });
// });
