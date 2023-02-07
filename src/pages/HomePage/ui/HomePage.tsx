import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('Home')}
        </div>
    );
};

export default HomePage;
