import { PrismaClient, Race } from '@prisma/client'

const prisma = new PrismaClient();

export async function getAllRaces() {
    const races: Race[] = await prisma.race.findMany();
    console.log(races);
    return races;
}

getAllRaces()
    .catch(e => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })