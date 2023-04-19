import { IRaceDAL } from  "../../src/Dal interfaces/IRaceDAL"
import { IRace } from "../../src/Model interfaces/IRace";

export class TestRaceDAL implements IRaceDAL {
    getAllRaces(): PromiseLike<IRace[]> {
        return new Promise<IRace[]>((resolve)  => {
            resolve([
                {
                    name: "ab",
                    icon: "AB",
                    factions: [
                        {
                            name: "a",
                            icon: "A"
                        },
                        {
                            name: "b",
                            icon: "B"
                        }]
                },
                {
                    name: "cd",
                    icon: "CD",
                    factions: [
                        {
                            name: "c",
                            icon: "C"
                        },
                        {
                            name: "d",
                            icon: "D"
                        }]
                }]);
        });
    }

}