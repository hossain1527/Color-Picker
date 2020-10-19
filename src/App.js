import React, { useState } from 'react';
import './App.css';
//import {ChromePicker} from 'react-color'
//import {SketchPicker} from 'react-color'
//import {CirclePicker} from 'react-color'
//import {TwitterPicker} from 'react-color'
import {PhotoshopPicker} from 'react-color'

function App () {
  const  [color, setColor] = useState('#00ff00')
    
      return (
       <div className="main-container">
          <PhotoshopPicker
          color={color}
          onChangeComplete={(color) => {setColor(color.hex)} }

          />

          <div style={{backgroundColor:color, height: '100vh', width:'100%'}}>
           <span>This is React Generated Color Picker</span>
          </div>
        </div>
     )
   
}

export default App;
