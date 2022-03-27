import React from 'react';
// import { Player } from 'video-react';
import  KiharaMediaWebVideo  from "../../videos/KiharaMediaWebVideo.mp4"

// import { homeObjOne } from './Data';
// import { InfoSection} from '../../components';

function Intro() {
 
 
  return (
    <>
    <video width="100%" controls autoPlay={true} loop muted playsInline >
                <source src={ KiharaMediaWebVideo } type="video/mp4"/>
                
                </video>
    </>
  )
}

export default Intro