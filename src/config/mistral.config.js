import { Mistral } from "@mistralai/mistralai";
import config from "./variables.config.js";

const clientMistral = new Mistral({ apiKey: config.KEY_MISTRAL});

export default clientMistral;
