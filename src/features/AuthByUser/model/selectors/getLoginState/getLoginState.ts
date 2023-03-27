import { StateSchema } from 'app/providers/ReduxProvider';

export const getLoginState = (state: StateSchema) => state.loginForm;
