import { StateSchema } from 'app/providers/ReduxProvider';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
