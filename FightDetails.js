import React from 'react'
import { Button } from '@mui/material'

function FightDetails({fight,fighters}) {
  var fighterArr = fight.BOUT.split('vs.')
  var fighter1 = fighterArr[0].trim()
  var fighter2 = fighterArr[1].trim()
  var arr = fight.OUTCOME.split('/')
  var winner = ''
  if(arr[0] == 'W'){
    winner = fighter1
  }
  if (arr[1]=='W'){
    winner = fighter2
  }
  
 
  function findFighterImage (fighter)   {
     // Create a mapping of fighter names to imgURLs
        const fighterNameToImgURLMap = {};
        for (const fighter of fighters) {
          fighterNameToImgURLMap[fighter.name] = fighter.imgURL;
        }
        
        // Now you can directly access the imgURL using the fighter's name
        const fighterName = fighter; // Replace with the name of the fighter you're interested in
        const imgUrl = fighterNameToImgURLMap[fighter];
        
        if (imgUrl) {
          return imgUrl;
        } else {
          // console.log(`${fighter} not found in the fighters array.`);
          return "https://www.sherdog.com/image_crop/200/300/_images/fighter_large_default.jpg"
        }
  }
  var fighter1Pic = findFighterImage(fighter1)
  var fighter2Pic = findFighterImage(fighter2)



  return (
    <div className='fight-details'>
        <h4><img className='fighterImage' src={fighter1Pic}/> {fighter1} VS  {fighter2}<img className='fighterImage' src={fighter2Pic} /> </h4>
        <p><strong>{fight.WEIGHTCLASS} </strong></p>
        <p>Stoppage by: <strong>{fight.METHOD}</strong> Round: <strong>{fight.ROUND}</strong></p>
        <p>Winner: <strong>{winner}</strong></p>
    </div>
  )
}

export default FightDetails