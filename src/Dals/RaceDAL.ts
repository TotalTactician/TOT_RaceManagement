import mongoose, { Mongoose } from "mongoose";
import { IRaceDAL } from "../Dal interfaces/IRaceDAL";
import { IRace } from "../Model interfaces/IRace";
import { RACE } from "../Models/Race";

export class RaceDAL implements IRaceDAL {
    public async getAllRaces() {
        
        let races: IRace[] = [];
        
        try {
            await mongoose.connect("mongodb://localhost:3600/TOT_RaceManagementDB");
            races = await RACE.find();
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