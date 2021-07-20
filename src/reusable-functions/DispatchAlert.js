import { CHANGE_ALERT_MESSAGE } from '../actions';

export const handleAlert = (type, message, dispatch, condition = true) => {
  dispatch({
    type: CHANGE_ALERT_MESSAGE,
    payload: {
      type,
      message,
      condition,
    },
  });
};
