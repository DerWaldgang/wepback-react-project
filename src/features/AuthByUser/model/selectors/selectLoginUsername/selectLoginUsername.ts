import { StateSchema } from 'app/providers/ReduxProvider';

export const selectLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
