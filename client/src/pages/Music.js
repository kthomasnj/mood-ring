import React, { useState } from 'react';
import useSound from 'use-sound'

function Music ({url}){
    const [playSound] = useSound(url)
    
    return (
      <button onClick={() => playSound()}>
         Play Sound
      </button>
    )
  }

  export default Music;