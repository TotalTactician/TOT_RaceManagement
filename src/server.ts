// Importing module
import express, { Application, Request, Response } from 'express';
import { IRaceDAL } from './Dal interfaces/IRaceDAL';
import { RaceDAL } from './Dals/RaceDAL';
import { IRace } from './Model interfaces/IRace';

const bp = require('body-parser');
const app: Application = express();
const PORT: Number = 3500;
const DAL: IRaceDAL = new RaceDAL();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Handling get / Request
app.get('/GetAll', async (req: Request, res: Response) => {
	const races: IRace[]	= await DAL.getAllRaces();

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
