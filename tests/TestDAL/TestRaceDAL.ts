import { IRaceDAL } from  "../../src/Dal interfaces/IRaceDAL"
import { IRace } from "../../src/Model interfaces/IRace";

export class TestRaceDAL {
    async getAllRacesReturnList(): Promise<IRace[]> {
            return [
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
                }];
    }

    async getAllRacesReturnEmptyList(): Promise<IRace[]> {
        return [];
}

}