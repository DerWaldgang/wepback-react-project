import { selectUserAuthData } from 'entities/User';
import { FC, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/RouterConfig/RouterConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => {
  const isAuth = useSelector(selectUserAuthData);

  const routes = useMemo(() => Object.values(routerConfig).filter((route) => {
    if (route.isAuthOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
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
};

export default AppRouter;
