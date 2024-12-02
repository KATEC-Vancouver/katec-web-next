import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/googleCalendar"); 

    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

     
        const data = await response.json();

        
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          throw new Error("Unexpected API response format");
        }

        setLoading(false);
      } catch (error: any) {
        console.error("Failed to fetch events:", error);
        setError(error.message || "Unknown error occurred");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  
  if (loading) {
    return <p>Loading events...</p>;
  }

  
  if (error) {
    return <p>Error loading events: {error}</p>;
  }

  
  if (events.length === 0) {
    return <p>No upcoming events found.</p>;
  }

  
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event: any) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>
              {new Date(event.start).toLocaleString()} -{" "}
              {new Date(event.end).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
