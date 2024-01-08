import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation('');
  return (
    <div style={{ color: 'red' }}>
      {t('Home')}
      <Counter />
    </div>
  );
};

export default HomePage;
