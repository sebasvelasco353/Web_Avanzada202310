import React from 'react'
import { useReducer } from 'react';

import EventCard from '../components/EventCard'
import UpdatePrompt from './UpdatePrompt';

import './../styles/Home.css'

import { Plus } from 'react-bootstrap-icons';
import { useState } from 'react';

export default function HomePage() {
  
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
      title: 'Toque SON CUBANO ICESI.',
      description: 'Son cubano va a tocar, por eso se llama así el evento.',
      dates: '30/03/2023 - 30/03/2023'
    },
    {
      title: 'Ya no tengo ideas, ayuda.',
      description: 'No tengo otras ideas, pero quiero tener mayor cantidad de registros.',
      dates: '01/04/2023 - 02/04/2023'
    }
  ];

  // The update type that the dispatcher uses
  const creationType = 2;

  const [modalOpen, setModalOpen] = useState(false);
  const [titleToUpdate, setTitleToUpdate] = useState();
  const [descriptionToUpdate, setDescriptionToUpdate] = useState();
  const [datesToUpdate, setDatesToUpdate] = useState();
  const [updateTypeState, setUpdateTypeState] = useState(0);
  const [indexToUpdate, setIndexToUpdate] = useState(0);


  const [events, dispatch] = useReducer(( state = [], action) => {

    switch(action.type){
      case 'add_event' : {
        return[
          ...state,
          {title: action.title, description: action.description, dates: action.dates}
        ];
      } 

      case 'remove_event' : {
        return  state.filter((event, index) => index != action.index);

      }

      case 'update_event' : { 
        let updatedEvents = [...state];

        let updatedEvent = updatedEvents[action.arrayIndex];

        updatedEvent.title = action.title;
        updatedEvent.description = action.description;
        updatedEvent.dates = action.dates;

        //Updates the array with the new event
        updatedEvents.splice(updatedEvent, 0);

        return updatedEvents;
      }

      default : {
        alert("Funcionalidad desconocida, el modulo de eventos presenta fallas. :c");
      }
    }

  }, dummyEvents
  );

  function updateEventDispatch(cardIndex, eventTitle, eventDescription, eventDates) {
    dispatch(
      {
      type:'update_event',
      arrayIndex: cardIndex,
      title: eventTitle,
      description: eventDescription,
      dates: eventDates
    })
  }

  function createEventDispatch(eventTitle, eventDescription, eventDates) {
    dispatch(
      {
      type:'add_event',
      title: eventTitle,
      description: eventDescription,
      dates: eventDates
    }
    )
  }

  function removeEventDispatch(eventIndex){
    dispatch(
      {
        type: 'remove_event',
        index: eventIndex
      }
    );
  }
  
  function setModalState(closeModal, updateType, cardIndex, title, description, date){
    setTitleToUpdate(title);
    setDescriptionToUpdate(description);
    setDatesToUpdate(date);
    setUpdateTypeState(updateType);
    setIndexToUpdate(cardIndex);

    setModalOpen(closeModal);
  }

  function renderUpdatePrompt(){
    if(modalOpen) return <UpdatePrompt
      title = {titleToUpdate}
      description = {descriptionToUpdate}
      dates = {datesToUpdate}
      index = {indexToUpdate}
      updateType = {updateTypeState}
      updateHandler = {updateEventDispatch}
      createHandler = {createEventDispatch}
      visibilityHandler = {setModalState}/>
  }

  return (
    <div className='Home__feed__div'>
      {/* True: open the modal; 2: indicates that the update type is creation 0: indicates that there's non specific index; '': cleans the inputs*/}  
        {
          events.map((event, eventIndex) => (
              <EventCard key = {eventIndex} updateHandler = {setModalState} eventIndex = {eventIndex} title = {event.title} description = {event.description} dates = {event.dates} removeHandler = {removeEventDispatch}/>
            )
          )
        }

      {renderUpdatePrompt()}
      <button className='Home__add__button' onClick={()=>setModalState(true, creationType, 0, '', '', '')}>
        <Plus size={60}/>
      </button>
    </div>
  )
}