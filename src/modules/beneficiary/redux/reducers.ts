const initialState = {
  link: '/event/create',
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_GLOBAL_APP_BUTTON_LINK':
      return {
        ...state,
        link: action.link,
      };
    case 'UNSET_GLOBAL_APP_BUTTON_LINK':
      return initialState;
    default:
      return state;
  }
}

export default reducer;
