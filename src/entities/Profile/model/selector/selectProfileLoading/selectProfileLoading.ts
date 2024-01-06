import { StateSchema } from 'app/providers/ReduxProvider';

export const selectProfileLoading = (state: StateSchema) => state.profile?.isLoading;
