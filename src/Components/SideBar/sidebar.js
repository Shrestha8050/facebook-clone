import React from 'react';
import './sidebar.css';
import SideBarRow from './SideBarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from '../../Provider/StateProvider';
const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SideBarRow src={user.photoURL} title={user.displayName} />
      <SideBarRow Icon={LocalHospitalIcon} title='COVID-19' />
      <SideBarRow title='Pages' Icon={EmojiFlagsIcon} />
      <SideBarRow title='Friends' Icon={PeopleIcon} />
      <SideBarRow title='Messenger' Icon={ChatIcon} />
      <SideBarRow title='Market Place' Icon={StorefrontIcon} />
      <SideBarRow title='Videos' Icon={VideoLibraryIcon} />
      <SideBarRow title='Market' Icon={ExpandMoreIcon} />
    </div>
  );
};

export default Sidebar;
