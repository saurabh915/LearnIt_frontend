import React, { useState } from "react";
import "./Calender.css"; // Import the CSS file
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
function Calendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });


  const handleDateClick = (arg) => {
    setNewEvent({ ...newEvent, date: arg.dateStr });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: "", date: "" });
    }
  };

  return (
    <div>


      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"80vh"}
        content={{
          dayHeaderFormat: { weekday: 'capitalize' } 
        }}
        events={events}
        dateClick={handleDateClick}
      />
      <div className="add-event-container">
        <h2>Add Event</h2>
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
            type="text"
            value={newEvent.date}
            disabled
          />
        </label>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default Calendar;