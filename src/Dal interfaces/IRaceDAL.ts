import { IRace } from "../Model interfaces/IRace";

export interface IRaceDAL {
	getAllRaces(): PromiseLike<IRace[]>;

}