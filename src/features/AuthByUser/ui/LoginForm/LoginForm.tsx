import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Enter username')} />
            <Input placeholder={t('Enter password')} />
            <Button theme={ThemeButton.OUTLINE_INVERTED}>
                {t('Login')}
            </Button>
        </div>
    );
};
