import mongoose, { Schema } from "mongoose";
import { IRace } from "../Model interfaces/IRace";

const RACESCHEMA = new Schema<IRace>({
    name: {
        type: String,
        required: true
    },
    icon: String,
    factions: [{
        name: {
            type: String,
            required: true
        }, 
        icon: String
    }]
})

export const RACE = mongoose.model("Race", RACESCHEMA);