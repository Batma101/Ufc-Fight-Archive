import React, { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import FightDetails from './FightDetails'
import { useAuthContext } from '../hooks/useAuthContext'

function SearchEvents({fights,fighters}) {
  
    const [search, setSearch] = useState('')
    const [event, setEvents] = useState([])
    const {user} = useAuthContext()
    //console.log(fights)

  const handleSearch = async () => {
      if(search && user){

        const lowerCaseSearchInput = search.toLowerCase();
        const searchedFights = fights.filter((fight) => {
            return (
              (fight.EVENT.toLowerCase().includes(lowerCaseSearchInput))
            );
           });

          setEvents(searchedFights);
          setSearch('');
      }

    }
  
   return (
   <Stack alignItems = 'center' mt= '37px' justifyContent={'center'} p={'20px'}>

   <Typography fontWeight={700} sx= {{
     fontSize: {lg : '44px', xs: '30px' }}} 
     mb= '50px' textAlign={'center'}
     >Search UFC Events</Typography>
     <Box position={'relative'} mb='72px'>

       <TextField height='76px'
       sx = {{
         input: {fontWeight: '700',
         border: 'none', borderRadius: '4px'}, 
       width: {lg: '800px', xs:'350px'},
       backgroundColor: '#fff',
       borderRadius: '40px'}}
       value={search}
       onChange={(e)=> {setSearch(e.target.value)}}
       placeholder='Search Fights'
       type={'text'}
       />
         <Button className='search-btn'
         sx={{
           bgcolor: 'blue',
           color: '#fff',
           textTransform: 'None',
           width: {lg: '175px', xs: '80px'},
           fontSize: {lg: '20px', xs: '14px'},
           height: '56px',
           position: 'absolute', right: '0'}}
           onClick = {handleSearch}
         >Search</Button>
     </Box>

          <Box position={'relative'} mb = '900px'>
            {event && event.map((event)=>(
            <FightDetails key={event._id} fight = {event} fighters = {fighters} />
        ))
              
        }
          </Box>
     


   </Stack>
    
  ) 
}

export default SearchEvents