import { ClientEvents } from "fnbr";
import BotClient from "../core/client";

type EventOptions = {
    name: string & {} | keyof ClientEvents;
    once?: boolean;
    run?: EventRunFunction;
};

interface IEvent {
    name: string;
    once: boolean;
    run: EventRunFunction;
}

type EventRunFunction = (client: BotClient, ...args: any[]) => void;

export {
    IEvent,
    EventOptions,
    EventRunFunction
};