/* eslint-disable */
export const getStateFromLS = () => {
  try {
    const localState = localStorage.getItem('TemplatesState');
    if (localState === null) {
      return undefined;
    }
    return (JSON.parse(localState));
  } catch (error) {
    console.log('loaalstorage error: ', error);
  }
};

export const saveStateToLS = (state) => {
  try {
    localStorage.setItem('TemplatesState', JSON.stringify(state));
  } catch (error) {
    console.log('loaalstorage error: ', error);
  }
};
