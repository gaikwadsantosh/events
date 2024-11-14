import express from 'express';
import { getAllEvents, createEvent, editEvent, removeEvent } from '../controllers/eventController';

const router = express.Router();

router.get('/events', getAllEvents);
router.post('/events', createEvent);
router.put('/events/:id', editEvent);
router.delete('/events/:id', removeEvent);

export default router;
