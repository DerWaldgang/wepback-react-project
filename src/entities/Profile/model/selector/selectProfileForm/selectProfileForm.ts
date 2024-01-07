import { StateSchema } from 'app/providers/ReduxProvider';

export const selectProfileForm = (state: StateSchema) => state.profile?.form;
