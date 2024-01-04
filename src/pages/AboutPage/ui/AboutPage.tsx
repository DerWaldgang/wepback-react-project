import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation('');

    return (
        <div>
            {t('About us')}
        </div>
    );
};

export default AboutPage;
