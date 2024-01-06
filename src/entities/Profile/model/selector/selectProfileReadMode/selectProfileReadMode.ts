import { StateSchema } from 'app/providers/ReduxProvider';

export const selectProfileReadMode = (state: StateSchema) => state.profile?.isReadOnly;
