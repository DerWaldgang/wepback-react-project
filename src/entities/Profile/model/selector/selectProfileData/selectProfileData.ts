import { StateSchema } from 'app/providers/ReduxProvider';

export const selectProfileData = (state: StateSchema) => state.profile?.data;
