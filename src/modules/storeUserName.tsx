import ActionTypes from '../utility/actionTypes';

export const storeUserName = (userNamePayload: string) => {
  return (dispatch: (arg0: {userNamePayload: string; type: string}) => void) =>
    new Promise(resolve => {
      dispatch({userNamePayload, type: ActionTypes.STORE_USER_NAME});
      resolve(userNamePayload);
    });
};

const reducer = (
  state = {
    userNamePayload: '',
  },
  action: {type: string; userNamePayload: string},
) => {
  switch (action.type) {
    case ActionTypes.STORE_USER_NAME: {
      return {
        ...state,
        userNamePayload: action.userNamePayload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
