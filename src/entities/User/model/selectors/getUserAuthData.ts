import { StateSchema } from 'app/providers/ReduxProvider';

export const getUserAuthData = ((state: StateSchema) => state.user.authData);
