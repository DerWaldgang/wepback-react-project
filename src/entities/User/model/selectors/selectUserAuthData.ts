import { StateSchema } from 'app/providers/ReduxProvider';

export const selectUserAuthData = ((state: StateSchema) => state.user.authData);
