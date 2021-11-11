/*
7.9: redux, step1

Siirry käyttämään React-komponenttien tilan sijaan Reduxia sovelluksen tilan hallintaan.

Muuta tässä tehtävässä notifikaatio käyttämään Reduxia.
*/

const defaultState = {
  notification:'',
  warning:''
};

let timer_notification;
let timer_warning;

const notificationReducer = (state = defaultState, action) => {
  switch(action.type)
  {
  case 'NOTIFICATION_SET':
    return { ...state, notification: action.content };
  case 'NOTIFICATION_EMPTY':
    return { ...state, notification: '' };
  case 'WARNING_SET':
    return { ...state, warning: action.content };
  case 'WARNING_EMPTY':
    return { ...state, warning: '' };
  default:
    return state;
  }

};

export const setNotification = (notification) => {

  return {
    type:'NOTIFICATION_SET',
    content: notification
  };

};

export const emptyNotification = () => {
  return {
    type:'NOTIFICATION_EMPTY'
  };
};

export const setWarning = (warning) => {
  return {
    type:'WARNING_SET',
    content:warning
  };
};

export const emptyWarning = () => {
  return {
    type:'WARNING_EMPTY'
  };
};

export const setTimedNotification = (notification, time) => {

  return async dispatch => {
    clearTimeout(timer_notification);
    dispatch(setNotification(notification));

    timer_notification = setTimeout(() => dispatch(emptyNotification()), time*1000);
  };

};

export const setTimedWarning = (warning, time) => {

  return async dispatch => {
    clearTimeout(timer_warning);
    dispatch(setWarning(warning));

    timer_warning = setTimeout(() => dispatch(emptyWarning()), time*1000);
  };
};

export default notificationReducer;