import { StateSchema } from 'app/providers/ReduxProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
