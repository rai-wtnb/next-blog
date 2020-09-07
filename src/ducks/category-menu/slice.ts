import { createSlice } from '@reduxjs/toolkit';

export type CategoryMenuState = {
  isDisplayMenu: boolean;
};
export const initialState: CategoryMenuState = {
  isDisplayMenu: false,
};

const categoryMenuSlice = createSlice({
  name: 'categoryMenu',
  initialState,
  reducers: {
    changeIsDisplayMenu: (state) => ({
      isDisplayMenu: !state.isDisplayMenu,
    }),
  },
});

// export default 'reducer'
export default categoryMenuSlice.reducer;
// export 'Action Creators'
export const { changeIsDisplayMenu } = categoryMenuSlice.actions;
