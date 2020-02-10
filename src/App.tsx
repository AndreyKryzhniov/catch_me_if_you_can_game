import React from 'react';
import './App.css';
import SettingBlock from './Setting/BlockSetting'
import BlockGame from './BlockGame/BlockGame'
import img from './Images/background.jpg'


const App = () => {


    let backImg = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }

  return (
      <div className="App" style={backImg}>
        <SettingBlock/>
        <BlockGame/>
      </div>
  );
}

export default App;
