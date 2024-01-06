import { StateSchema } from 'app/providers/ReduxProvider';

export const selectLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
