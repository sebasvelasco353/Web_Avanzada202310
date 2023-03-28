import React from 'react'
import { useReducer } from 'react';

import EventCard from '../components/EventCard'
import UpdatePrompt from './UpdatePrompt';

import './../styles/Home.css'

import { Plus } from 'react-bootstrap-icons';
import { useState } from 'react';
export default function HomePage() {


  const [indexEvent, setIndexevent] = useState(0);
  
  let dummyEvents = [
    {
      title: 'Feria de mi pueblo.',
      description: 'Una feria, pero es en mi pueblo.',
      dates: '12/01/2023 - 14/01/2023'
    },
    {
      title: 'Toque ESMEGMA ICESI.',
      description: 'El grupo de rock va a tocar. c:',
      dates: '30/03/2023 - 30/03/2023'
    },
    {
      title: 'Ingesta de productos recreativos. c:',
      description: 'Se va a celebrar una ingesta de productos recreativos.',
      dates: '30/03/2023 - 31/03/2023'
    },
    {
      title: 'Ya no tengo ideas, ayuda.',
      description: 'No tengo otras ideas, pero quiero tener mayor cantidad de registros.',
      dates: '01/04/2023 - 02/04/2023'
    }
  ];

  const [events, dispatch] = useReducer(( state = [], action) => {
    
    switch(action.type){
      case 'add_event' : {
        return[
          ...state,
          {title: action.title, description: action.description, dates: action.date}
        ];
      } 

      case 'remove_event' : {
        return  state.filter((event, index) => index != action.index);

      }

      case 'update_event' : { 
        let updatedEvents = [...state];
        
        //Remove element with the given index
        updatedEvents.splice(action.index, 1);

        //Add element at the given index.
        updatedEvents.splice(action.updatedEvent, action.index, 0)

        return updatedEvents;
      }

      default : {
        alert("Funcionalidad desconocida, el modulo de eventos presenta fallas. :c");
      }
    }

  }, dummyEvents
  );

  const updatePrompt = (title, description, dates) => {
    alert("juas juas")
  }

  function removeEvent (eventIndex){
    dispatch(
      {
        type: 'remove_event',
        index: eventIndex
      }
    )

  }

  return (
    <div className='Home__feed__div'>

      <button className='Home__add__button' onClick={()=>updatePrompt('', '', '')}>
        <Plus size={60}/>
      </button>

        {
          events.map((event, eventIndex) => (
              <EventCard key = {eventIndex} eventIndex = {eventIndex} title = {event.title} description = {event.description} dates = {event.dates} removeHandler = {removeEvent}/>
            )
          )
        }
    </div>
  )
}