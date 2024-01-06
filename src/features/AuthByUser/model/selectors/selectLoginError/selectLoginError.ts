import { StateSchema } from 'app/providers/ReduxProvider';

export const selectLoginError = (state: StateSchema) => state?.loginForm?.error;
