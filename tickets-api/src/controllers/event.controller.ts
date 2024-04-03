import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Event } from "../entity/Event.entity";
import { encrypt } from "../helpers/encrypt";
import { EventResponse} from "../dto/Event.dto"; // Import EventDto from the correct path
import * as cache from "memory-cache";

export class EventController {
  static async signup(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const encryptedPassword = await encrypt.encryptpass(password);
    const Event = new Event();
    Event.name = name;
    Event.email = email;
    Event.password = encryptedPassword;
    Event.role = role;

    const EventRepository = AppDataSource.getRepository(Event);
    await EventRepository.save(Event);
// Use the EventResponse DTO to structure the data being sent in the response
const EventdataSent = new EventResponse()
EventDataSent.name = Event.name;
EventDataSent.email= Event.email;
EventDataSent.role = Event.role;


    
    const token = encrypt.generateToken({ id: Event.id });

    return res
      .status(200)
      .json({ message: "Event created successfully", token, EventDataSent });
  }