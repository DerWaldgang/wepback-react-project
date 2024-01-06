export { profileReducer, profileActions } from './model/slice/profileSlice';

export type {
    Profile, ProfileSchema,
} from './model/types/profile';

export { getProfileData } from './model/services/getProfileData/getProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
// export { selectProfileData } from './model/selector/selectProfileData/selectProfileData';
// export { selectProfileError } from './model/selector/selectProfileError/selectProfileError';
// export { selectProfileLoading } from './model/selector/selectProfileLoading/selectProfileLoading';
// export { selectProfileReadMode } from './model/selector/selectProfileReadMode/selectProfileReadMode';
