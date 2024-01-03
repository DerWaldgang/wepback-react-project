import {
    FC, Suspense, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/RouterProvider';

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuhtData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
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
