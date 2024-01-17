import config from "./config";
import BotClient from "./core/client";

const client = new BotClient(config);
client.start();