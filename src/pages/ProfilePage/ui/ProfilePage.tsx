import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = () => {
    const { t } = useTranslation('');
    return (
        <DynamicModuleLoader reducers={reducers} isDestroyAfterUnmount>
            <div>
                {t('Profile')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
