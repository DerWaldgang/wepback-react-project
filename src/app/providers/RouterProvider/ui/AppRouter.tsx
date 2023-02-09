import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/RouterConfig/RouterConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                    key={path}
                />
            )) }
        </Routes>
    </Suspense>
);

export default AppRouter;
