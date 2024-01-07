import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    isReadMode?: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className, isReadMode = false }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleEditMode = useCallback(() => {
    if (isReadMode) {
      dispatch(profileActions.setReadOnlyMode(!isReadMode));
    } else {
      dispatch(profileActions.setCancelProfileDataEdit());
    }
  }, [dispatch, isReadMode]);

  const handleSaveChanges = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} theme={ThemeText.INVERTED} />
      {isReadMode ? (
        <Button theme={ThemeButton.OUTLINE} onClick={handleEditMode}>
          { t('Edit') }
        </Button>
      )
        : (
          <div className={styles.buttonContainer}>
            <Button theme={ThemeButton.BACKGROUND_INVERTED} onClick={handleSaveChanges}>
              { t('Save')}
            </Button>
            <Button theme={ThemeButton.OUTLINE} onClick={handleEditMode}>
              { t('Cancel')}
            </Button>

          </div>
        )}
    </div>
  );
};
