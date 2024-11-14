export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
  }
  
  let events: Event[] = [];
  
  export const getEvents = () => events;
  export const addEvent = (event: Event) => events.push(event);
  export const updateEvent = (id: string, updatedEvent: Event) => {
    const index = events.findIndex((event) => event.id === id);
    if (index !== -1) {
      events[index] = { ...events[index], ...updatedEvent };
    }
  };
  export const deleteEvent = (id: string) => {
    events = events.filter((event) => event.id !== id);
  };
  