import { getLoginState } from 'features/AuthByUser/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUser/model/services/LoginByUsername/LoginByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
        dispatch(loginActions.setPassword(''));
        dispatch(loginActions.setUsername(''));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('Auth')} />
            <Input autofocus placeholder={t('Enter username')} onChange={onChangeUsername} value={username} />
            <Input type="password" placeholder={t('Enter password')} onChange={onChangePassword} value={password} />
            <div className={styles.infoContainer}>
                <Button disabled={isLoading} theme={ThemeButton.OUTLINE_INVERTED} onClick={onLoginClick}>
                    {t('Login')}
                </Button>
                {error && <Text text={t('Login error message')} theme={ThemeText.ERROR} />}
            </div>
        </div>
    );
});
