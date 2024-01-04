import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/ReduxProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type ReducersListEntries = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    isDestroyAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
    children, reducers, isDestroyAfterUnmount,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([keyOfReducer, reducer]: ReducersListEntries) => {
            store.reducerManager.add(keyOfReducer, reducer);
            dispatch({ type: `@INIT_DYNAMIC ${keyOfReducer}` });
        });

        return () => {
            if (isDestroyAfterUnmount) {
                Object.entries(reducers).forEach(([keyOfReducer, reducer]: ReducersListEntries) => {
                    store.reducerManager.remove(keyOfReducer);
                    dispatch({ type: `DESTROY_DYNAMIC ${keyOfReducer}` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            { children }
        </>

    );
};
