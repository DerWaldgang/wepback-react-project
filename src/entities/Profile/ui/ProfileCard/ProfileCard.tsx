import { CountryEnum, CountrySelect } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { Profile } from 'entities/Profile/model/types/profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    profileData?: Profile;
    error?: string;
    isLoading?: boolean;
    isReadMode?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?:(value?: string) => void;
    onChangeUsername?:(value?: string) => void;
    onChangeAge?:(value?: string) => void;
    onChangeCity?:(value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: CurrencyEnum) => void;
    onChangeCountry?: (value?: CountryEnum) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  profileData,
  error,
  isLoading,
  isReadMode,
  onChangeFirstname,
  onChangeLastname,
  onChangeUsername,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loadingOrError])}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={classNames(styles.ProfileCard, {
      [styles.loadingOrError]: error,
    }, [className])}
    >
      {error ? (
        <Text
          theme={ThemeText.ERROR}
          text={t('Failed to get profile data')}
          textAlign={TextAlign.CENTER}
        />
      )
        : (
          <div className={styles.data}>

            <div className={styles.avatarWrapper}>
              <Avatar
                src={profileData?.avatar}
                alt="avatar"
                size={48}
              />
              <Input
                value={profileData?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={styles.input}
                onChange={onChangeAvatar}
                readOnly={isReadMode}
              />
            </div>
            <Input
              className={styles.input}
              value={profileData?.username}
              placeholder={t('Your username')}
              readOnly={isReadMode}
              onChange={onChangeUsername}
            />
            <Input
              className={styles.input}
              value={profileData?.firstname}
              placeholder={t('Your name')}
              readOnly={isReadMode}
              onChange={onChangeFirstname}
            />
            <Input
              className={styles.input}
              value={profileData?.lastname}
              placeholder={t('Your surname')}
              readOnly={isReadMode}
              onChange={onChangeLastname}
            />
            <Input
              className={styles.input}
              value={profileData?.age}
              placeholder={t('Your age')}
              readOnly={isReadMode}
              onChange={onChangeAge}
              type="number"
            />
            <Input
              className={styles.input}
              value={profileData?.city}
              placeholder={t('Your city')}
              readOnly={isReadMode}
              onChange={onChangeCity}
            />
            <CurrencySelect
              className={styles.input}
              value={profileData?.currency}
              onChange={onChangeCurrency}
              isReadMode={isReadMode}
            />
            <CountrySelect
              className={styles.input}
              value={profileData?.country}
              onChange={onChangeCountry}
              isReadMode={isReadMode}
            />
          </div>
        ) }
    </div>
  );
};
