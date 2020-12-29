export const initialState = {
  user: null,
  isModalOpened: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'CHANGE_MODAL_STATE':
      return {
        ...state,
        isModalOpened: !state.isModalOpened
      }
  }
};

export default reducer;
