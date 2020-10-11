import React from 'react';
import './App.css';
import Feeds from './Components/Feed/Feeds';
import Widgets from './Components/Feed/Widgets/widgets';
import Header from './Components/header';
import Sidebar from './Components/SideBar/sidebar';
import Login from './Components/Login/login';
import { useStateValue } from './Provider/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {/* Header */}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app-body'>
            <Sidebar />
            <Feeds />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
