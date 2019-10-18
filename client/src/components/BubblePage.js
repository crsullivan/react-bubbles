import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithLoginAuth} from './utils/axiosWithLoginAuth';


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    const getColors = () => {
      axiosWithLoginAuth()
        .get('/api/colors')
        .then(response => {
          setColorList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getColors();
  },[]);

  return (
    <>
      <div className='flexit'>
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
    </>
  );
};

export default BubblePage;
