import { useSelector } from 'react-redux';
import { CategoryMenuState } from './slice';

export const useCategoryMenuState = () => {
  return useSelector((state: { categoryMenu: CategoryMenuState }) => state);
};
