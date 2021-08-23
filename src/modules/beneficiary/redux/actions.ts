export const setGlobalButtoLink = (link: string) => (dispatch: any) => {
  dispatch({ type: 'SET_GLOBAL_APP_BUTTON_LINK', link });
};

export const unSetGlobalButtoLink = () => (dispatch: any) => {
  dispatch({ type: 'UNSET_GLOBAL_APP_BUTTON_LINK' });
};

