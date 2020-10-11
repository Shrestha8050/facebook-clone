import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebar.css';

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <div className='sidebar__row'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
