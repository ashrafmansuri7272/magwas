import {config} from "dotenv";
const dotEnv = config();

const {PORT, MONGO_URI} = process.env;

export const constants = {
    PORT ,
    MONGO_URI
}