import { StateSchema } from 'app/providers/ReduxProvider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
