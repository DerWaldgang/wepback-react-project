import { AppDispatchType } from 'app/providers/ReduxProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
