import React from 'react'

import { homeObjOne } from './Data';
import { InfoSection} from '../../components';

function Intro() {
  return (
    <>
    <InfoSection {...homeObjOne} />
    </>
  )
}

export default Intro