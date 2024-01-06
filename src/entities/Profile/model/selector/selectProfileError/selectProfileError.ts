import { StateSchema } from 'app/providers/ReduxProvider';

export const selectProfileError = (state: StateSchema) => state.profile?.error;
