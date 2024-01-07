import { createReduxStore } from './config/store';
import type {
  StateSchema, ReduxStoreWithManager, ThunkExtraArguments, ThunkConfig,
} from './config/StateSchema';
import { ReduxProvider } from './ui/ReduxProvider';
import type { AppDispatchType } from './config/store';

export {
  ReduxProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatchType,
  ThunkExtraArguments,
  ThunkConfig,
};
