import mongoose from "mongoose";
import { IRaceDAL } from "../Dal interfaces/IRaceDAL";
import { IRace } from "../Model interfaces/IRace";
import { RACE } from "../Models/Race";

export class RaceDAL implements IRaceDAL {
    public async getAllRaces(): Promise<IRace[]> {
        const CONNSTRING = process.env.DATABASE_URL || "";
        
        let races: IRace[] = [];
        
        try {
            await mongoose.connect(CONNSTRING);
            races = await RACE.find({}, '-_id -__v');
        } 
        catch (e) {
            console.error(e)
        }
        finally {
            await mongoose.disconnect();
        }

        return races;
    }
}