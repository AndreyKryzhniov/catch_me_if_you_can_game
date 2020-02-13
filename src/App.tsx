import React from 'react';
import './App.css';
import SettingBlock from './Setting/BlockSetting'
import BlockGame from './BlockGame/BlockGame'
import img from './Images/background.jpg'


const App = () => {


    let backImg = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: "100vh",
        backgroundSize: 'cover'
    }

  return (
      <div className="App" style={backImg}>
        <SettingBlock/>
        <BlockGame/>
      </div>
  );
}

export default App;
