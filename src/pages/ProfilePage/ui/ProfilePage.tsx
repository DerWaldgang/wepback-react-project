import {
  ProfileCard,
  getProfileData,
  profileActions,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
  selectProfileReadMode,
} from 'entities/Profile';

import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { CurrencyEnum } from 'entities/Currency';
import { CountryEnum } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation('');
  const dispatch = useAppDispatch();
  const profileFormData = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const isReadMode = useSelector(selectProfileReadMode);

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.setProfileDataEdit({
      firstname: value || '',
    }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.setProfileDataEdit({
      lastname: value || '',
    }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.setProfileDataEdit({
      username: value || '',
    }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.setProfileDataEdit({
      city: value || '',
    }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.setProfileDataEdit({
      age: Number(value) || 0,
    }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.setProfileDataEdit({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: CurrencyEnum) => {
    dispatch(profileActions.setProfileDataEdit({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: CountryEnum) => {
    dispatch(profileActions.setProfileDataEdit({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} isDestroyAfterUnmount>
      <div>
        <ProfilePageHeader isReadMode={isReadMode} />
        <ProfileCard
          profileData={profileFormData}
          error={error}
          isLoading={isLoading}
          isReadMode={isReadMode}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
