import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginLoading } from '../../model/selectors/selectLoginLoading/selectLoginLoading';
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginLoading);
    const error = useSelector(selectLoginError);
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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        dispatch(loginActions.setPassword(''));
        dispatch(loginActions.setUsername(''));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers} isDestroyAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
