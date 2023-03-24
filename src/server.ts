// Importing module
import { Race } from '@prisma/client';
import express, { Application, Request, Response } from 'express';
import { getAllRaces } from './RaceDAL';

const bp = require('body-parser');
const app: Application = express();
const PORT: Number = 3500;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Handling get / Request
app.get('/GetAll', async (req: Request, res: Response) => {
	const races: Race[]	= await getAllRaces();

	res.status(200).json({
		"Time": new Date().toUTCString(),
		//read param
		"Races": races
	});
})

// Server setup
app.listen(PORT, () => {
	console.log('The application is listening '
		+ 'on port http://localhost:' + PORT);
})
