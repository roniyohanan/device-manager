import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { config } from './config';
import { getAllDevices } from './getDevices';

const app = express();
app.use(express.json());

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/devices', async (_req: Request, res: Response) => {
    res.json(await getAllDevices());
  });

app.listen(config.server.port, () =>
    console.log(`app listening on port ${config.server.port}!`));
