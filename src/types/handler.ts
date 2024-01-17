import BotClient from "../core/client";

interface IHandler {
    name: string;
    run: HandlerRunFunction;
}

type HandlerOptions = {
    name?: string;
    run?: HandlerRunFunction;
}

type HandlerRunOptions = {
    client: BotClient,
}

type HandlerRunFunction = {
    (options: HandlerRunOptions): Promise<void>;
}

export type {
    HandlerOptions,
    IHandler,
    HandlerRunOptions,
    HandlerRunFunction,
}