import { StateSchema } from 'app/providers/ReduxProvider';

export const selectLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
