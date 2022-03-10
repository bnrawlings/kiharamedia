import React from 'react';
import { Player } from 'video-react';
import{ KiharaMediaWebVideo.mp4 } from "../../../public/videos/KiharaMediaWebVideo.mp4"

// import { homeObjOne } from './Data';
// import { InfoSection} from '../../components';

function Intro() {
  return (
    <>
    <Player 
    playsInline
    src= { KiharaMediaWebVideo } />
    </>
  )
}

export default Intro