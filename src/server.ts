// Importing module
import express, { Application, Request, Response } from 'express';
import racesJson from './Races.json';

const bp = require('body-parser');
const app: Application = express();
const PORT: Number = 3500;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Handling post / Request
app.get('/GetAll', (req: Request, res: Response) => {
	res.status(200).json({
		"Time": new Date().toUTCString(),
		"Races": racesJson.Races,
	});
})

// Server setup
app.listen(PORT, () => {
	console.log('The application is listening '
		+ 'on port http://localhost:' + PORT);
})
