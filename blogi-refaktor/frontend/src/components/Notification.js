import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {

  const notification = useSelector(state => state.messages.notification);

  if(notification === '')
    return null;

  return (<div id="notification">{notification}</div>);
};

export default Notification;