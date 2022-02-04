export const setAppState = (actionType, data) => {
  const action = {
    type: actionType,
    payload: data,
  };
  return action;
};
