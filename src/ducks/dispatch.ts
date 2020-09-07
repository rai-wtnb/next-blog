import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
export function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}
