import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorCatchProvider';
import { ReduxProvider } from 'app/providers/ReduxProvider';
import App from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

render(
    <ReduxProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root'),
);
