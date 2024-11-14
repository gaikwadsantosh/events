import { Request, Response } from 'express';
import { addEvent, getEvents, updateEvent, deleteEvent } from '../models/eventModel';

export const getAllEvents = (req: Request, res: Response) => {
  res.json(getEvents());
};

export const createEvent = (req: Request, res: Response) => {
  const newEvent = { id: Date.now().toString(), ...req.body };
  addEvent(newEvent);
  res.status(201).json(newEvent);
};

export const editEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  updateEvent(id, req.body);
  res.json({ message: 'Event updated successfully' });
};

export const removeEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  deleteEvent(id);
  res.status(204).send();
};
