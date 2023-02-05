import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
       {Object.values(routerConfig).map(({path, element}) => (
        <Route path={path} element={element} key={path}/>
       )) }
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
