import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReduxProvider, StateSchema } from 'app/providers/ReduxProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTests';

export interface RenderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}
export function ComponentRender(component: ReactNode, options:RenderWithRouterOptions = {}) {
    const { route = '/', initialState } = options;
    return render(
        <ReduxProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </ReduxProvider>,
    );
}
