import React from 'react'
import AboutMe2 from '../komponenten/AboutMe2'
import Navbar2 from '../komponenten/Navbar2'
import SocialMedia2 from '../komponenten/SocialMedia2'

const ÜberMich = ({translation, setTranslation}) => {
  return (
    <div>
      {/* <Navbar2/> */}
      <AboutMe2 translation={translation} setTranslation={setTranslation}/>
      {/* <SocialMedia2/> */}
    </div>
  )
}

export default ÜberMich