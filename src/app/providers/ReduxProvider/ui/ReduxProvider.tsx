import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { DeepPartial } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const store = createReduxStore(navigate, initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
