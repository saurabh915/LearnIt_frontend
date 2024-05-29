import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios'; // Import Axios for HTTP requests
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CalendarForTeacher() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(false);
  const [eventID, setEventID] = useState('');
  const [show, setShow] = useState(false);
  const [eventOpened, setEventOpened]=useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getAllEvents');
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }


  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const giveMeIDByDate = async (dates) => {
    try {
     
      const response = await axios.get(`http://localhost:8000/getEventIdByDate/${dates}`);
      console.log("check");
      console.log(response.data);
      localStorage.setItem('delToken', response.data.eventId);
      setEventID(response.data.eventId);
      setView(response.data.eventId !== null);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateClick = (arg) => {
    console.log(arg);
    setNewEvent({ ...newEvent, date: arg.dateStr });
    giveMeIDByDate(arg.dateStr);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = async () => {
    try {
      if (newEvent.title && newEvent.date) {
        const response = await axios.post('http://localhost:8000/addEvent', newEvent);
        console.log(response);
        setEvents([...events, { id: response.data.id, ...newEvent }]);//for calender
        setNewEvent({ title: "", date: ""});
        window.location.reload(); 
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  // const handleDeleteEvent = async () => {
  //   const eventId = localStorage.getItem('delToken');
  //   if (eventId) {
  //     const confirmDelete = window.confirm("Are you sure you want to delete this event?");
  //     if (confirmDelete) {
  //       try {
  //         await axios.delete(`http://localhost:8000/deleteEvent/${eventId}`);
  //         const updatedEvents = events.filter(event => event.id !== eventId);
  //         setEvents(updatedEvents);
  //         localStorage.removeItem('delToken');
  //         window.location.reload();
  //       } catch (error) {
  //         console.error('Error deleting event:', error);
  //       }
  //     }
  //   } else {
  //     setView(false);
  //   }
  // };

  // const handleClear = () => {
  //   localStorage.removeItem('delToken');
  //   window.location.reload();
  // };

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth",
            // end: "dayGridMonth,timeGridWeek,timeGridDay",

          }}
          height={"100vh"}
          events={events}
          dateClick={handleDateClick}



          eventContent={(eventInfo) => {

            console.log(eventInfo.event); // Log the event object to console

            const handleView = async()=>{
                console.log("handleView");
            };

            const handleDelete = async (eventId) => {
              
              if (eventId) {
                const confirmDelete = window.confirm("Are you sure you want to delete this event?");
                if (confirmDelete) {
                  try {
                    await axios.delete(`http://localhost:8000/deleteEvent/${eventId}`);
                    const updatedEvents = events.filter(event => event.id !== eventId);
                    setEvents(updatedEvents);
                    localStorage.removeItem('delToken');
                    //window.location.reload();
                    fetchEvents();
                  } catch (error) {
                    console.error('Error deleting event:', error);
                  }
                }
              } else {
                setView(false);
              }
            };

            // const eventItems = events.map(event => (
            //   <div key={event.id}>
            //     <p>Title: {event.title}</p>
            //     <p>Time : {JSON.stringify(event.date).slice(12,17)} UTC</p>
            //     <p>Date: {JSON.stringify(event.date).slice(1,11)} </p>
            //     <hr/>
            //   </div>
            // ));

          const fetchParticularEvent=async(id)=>{
                
            try {
              const response = await axios.get(`http://localhost:8000/getEventByID/${id}`);
              console.log(response.data);
              response.data.date=JSON.stringify(response.data.date).slice(1,11);
              setEventOpened(response.data);
            } catch (error) {
              console.error('Error fetching events:', error);
            }    

            handleShow(true);


          };

           


            return (


              <>
                <div className="col">
                  <div className="event-content text-white bg-primary">
                    {eventInfo.event.title.substring(0,8) + '...'}
                    {'...'}
                    <span className="view-icon" onClick={() => fetchParticularEvent(eventInfo.event._def.extendedProps._id)}>👁️</span>
                    <span className="delete-icon" onClick={() => handleDelete(eventInfo.event._def.extendedProps._id)}>&times;</span>
                  </div>
                </div>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <div>Title : {eventOpened.title}</div>
                      <div>Date : {eventOpened.date}</div>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>


              </>
            );
          }}
        />
        
       
        <div>
          <h2 style={{marginTop:'70px'}}>Add Event</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      </div>
    </>
  );
}

export default CalendarForTeacher;
