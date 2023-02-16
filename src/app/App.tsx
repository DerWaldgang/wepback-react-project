import {
    FC, Suspense, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/RouterProvider';

const App: FC = () => {
    const { theme } = useTheme();
    
    // For testing ErrorBoundary catch

    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     if (error) {
    //         throw new Error();
    //     }
    // }, [error]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* <button
                    type="button"
                    onClick={() => {
                        setError(true);
                    }}
                // eslint-disable-next-line i18next/no-literal-string
                >
                    throw error

                </button> */}
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
