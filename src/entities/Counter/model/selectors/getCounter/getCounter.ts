import { StateSchema } from 'app/providers/ReduxProvider';

export const getCounter = (state: StateSchema) => state.counter;
