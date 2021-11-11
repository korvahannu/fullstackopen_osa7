import React from 'react';
import { useSelector } from 'react-redux';

const Warning = () => {

  const warning = useSelector(state => state.messages.warning);

  if(warning === '')
    return null;

  return (<div id="warning">{warning}</div>);
};

export default Warning;