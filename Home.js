import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import FightDetails from '../components/FightDetails';
import SearchEvents from '../components/SearchEvents';
import PickDetails from '../components/PickDetails';
import Pickem from './Pickem';

const Home = () => {
  const [Fights, setFights] = useState(null);
  const [Fighters, setFighters] = useState(null);
  const [Eventss, setEvents] = useState(null);
  const { user } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    console.log("Effect running once someone logs in");

    const fetchFights = async () => {
      const response = await fetch('/api/fights', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      
      const json = await response.json();

      if (response.ok) {
        setFights(json);
      }
    };

    const fetchFighters = async () => {
      const response = await fetch('/api/fighters/', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setFighters(data);
      }
    };

    const fetchEvent = async () => {
      const response = await fetch('/api/events', {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setEvents(data);
      }
    };

    if (user) {
      fetchFighters();
      fetchFights();
      fetchEvent();
    }
  }, [user]);

  // Check if Eventss is an object and map it to the required format
  const eventArray = Eventss ? Object.values(Eventss) : [];


  const isPicker = location.pathname === '/picker'

  return (

    <div className='home'>
      <div className='workouts'>
        {user && <SearchEvents fights={Fights} fighters={Fighters} />}

        {/* { Eventss && eventArray.length > 0 ? (<Pickem fights={eventArray} fighters={Fighters} /> ) 
        :
          <h1>Failed to load data</h1>
        
        
        } Pass the mapped eventArray */}
  
      </div>
    </div>
    
  );
};

export default Home;
