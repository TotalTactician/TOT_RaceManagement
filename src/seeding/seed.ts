import mongoose from "mongoose";
import { RACE } from "../Models/Race";

main()

async function main(){
    await mongoose.connect("mongodb://localhost:3600/TOT_RaceManagementDB");
    await RACE.create({
        name: "Chaos Dwarfs", 
        icon: "",
        factions: [
            {
                name: "Disciples of Hashut",
                icon: ""
            },
            {
                name: "The Legion of Azgorh",
                icon: ""
            },
            {
                name: "The Warhost of Zharr",
                icon: ""
            }
        ]
    });
    console.log("Added Chaos Dwarfs");

    await RACE.create({
        name: "Skaven", 
        icon: "",
        factions: [
            {
                name: "Clan Mors",
                icon: ""
            },
            {
                name: "Clan Pestilens",
                icon: ""
            },
            {
                name: "Clan Rictus",
                icon: ""
            },
            {
                name: "Clan Eshin",
                icon: ""
            },
            {
                name: "Clan Skryre",
                icon: ""
            },
            {
                name: "Clan Moulder",
                icon: ""
            }
        ]
    });
    console.log("Added Skaven");

    await RACE.create({
        name: "Greenskins", 
        icon: "",
        factions: [
            {
                name: "Grimgor's 'Ardboyz",
                icon: ""
            },
            {
                name: "Bonerattlaz",
                icon: ""
            },
            {
                name: "The Bloody Handz",
                icon: ""
            },
            {
                name: "Crooked Moon",
                icon: ""
            },
            {
                name: " Broken Axe",
                icon: ""
            }
        ]
    });
    console.log("Added Greenskins");
} 