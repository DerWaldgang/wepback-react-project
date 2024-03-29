import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUser';
import { NavigateOptions, To } from 'react-router-dom';
import { AppDispatchType } from './store';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // Async Reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema,
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) =>void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager?: ReduxReducerManager
}

export interface ThunkExtraArguments {
    $api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArguments,
    dispatch: AppDispatchType,
    state: StateSchema;
}
