import { StateSchema } from 'app/providers/ReduxProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
