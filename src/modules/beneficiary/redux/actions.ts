export const setGlobalButtoLink = (link: string) => (dispatch: any) => {
  dispatch({ type: 'SET_GLOBAL_APP_BUTTON_LINK', link });
};
