import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface ReduxProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const ReduxProvider = (props: ReduxProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
