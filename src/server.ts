// Importing module
import express, { Application, Request, Response } from 'express';
import { IRaceDAL } from './Dal interfaces/IRaceDAL';
import { RaceDAL } from './Dals/RaceDAL';
import { IRace } from './Model interfaces/IRace';

require("dotenv").config();

const BP = require('body-parser');
const PORT: Number = Number(process.env.PORT) || 3500;
const DAL: IRaceDAL = new RaceDAL();

export const APP: Application = express();

APP.use(BP.json());
APP.use(BP.urlencoded({ extended: true }));

// Handling get / Request
APP.get('/GetAll', async (req: Request, res: Response) => {
	const races: IRace[]	= await DAL.getAllRaces();
	res.status(200).json({
		"Time": new Date().toUTCString(),
		//read param
		"Races": races
	});
})

APP.get('/ping', (_req: Request, _res: Response) => {

	_res.status(200).json({
		"status": "Pong!"
	});
})

// Server setup
APP.listen(PORT, () => {
	console.log('The application is listening '
		+ 'on port http://localhost:' + PORT);
})
