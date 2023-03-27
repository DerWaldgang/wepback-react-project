import { getUserAuthData } from './model/selectors/getUserAuthData';
import { userReducer, userActions } from './model/slice/userSlice';
import { UserSchema, User } from './model/types/user';

export {
    userReducer, userActions, UserSchema, User, getUserAuthData,
};
