import * as express from "express";
import { authentification } from "../middleware/authentification";
import { EventController } from "../controllers/Event.controllers";
import { authorization } from "../middleware/authorization";
import { AuthController } from "../controllers/auth.controller";
const Router = express.Router();

Router.get(
  "/events",
  authentification,
  authorization(["admin"]),
  EventController.getEvents
);
Router.get(
  "/profile",
  authentification,
  authorization(["Event", "admin"]),
  AuthController.getProfile
);
Router.post("/signup", EventController.signup);
Router.post("/login", AuthController.login);
Router.put(
  "/update/:id",
  authentification,
  authorization(["Event", "admin"]),
  EventController.updateEvent
);
Router.delete(
  "/delete/:id",
  authentification,
  authorization(["admin"]),
  EventController.deleteEvent
);
export { Router as EventRouter };