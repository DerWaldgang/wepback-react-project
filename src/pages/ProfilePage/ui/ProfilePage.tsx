import { ProfileCard, getProfileData, profileReducer } from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = () => {
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} isDestroyAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
