import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/ReduxProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class JestTestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  navigate: jest.MockedFunction<any>;

  $api: jest.MockedFunctionDeep<AxiosStatic>;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.$api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      { $api: this.$api, navigate: this.navigate },
    );
    return result;
  }
}
