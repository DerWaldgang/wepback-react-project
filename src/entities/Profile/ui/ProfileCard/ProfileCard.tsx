import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { selectProfileData } from 'entities/Profile/model/selector/selectProfileData/selectProfileData';
import { selectProfileLoading } from 'entities/Profile/model/selector/selectProfileLoading/selectProfileLoading';
import { selectProfileError } from 'entities/Profile/model/selector/selectProfileError/selectProfileError';
import { selectProfileReadMode } from 'entities/Profile/model/selector/selectProfileReadMode/selectProfileReadMode';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation();
    const profileData = useSelector(selectProfileData);
    const isLoading = useSelector(selectProfileLoading);
    const error = useSelector(selectProfileError);
    const isReadMode = useSelector(selectProfileReadMode);
    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.edit}>
                <Text title={t('Profile')} theme={ThemeText.INVERTED} />
                <Button theme={ThemeButton.OUTLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input className={styles.input} value={profileData?.firstname} placeholder={t('Your name')} />
                <Input className={styles.input} value={profileData?.lastname} placeholder={t('Your surname')} />
            </div>
        </div>
    );
};
