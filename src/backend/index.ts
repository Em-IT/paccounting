import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';

import transactionsRoutes from './routes/transactions';
import { logEmpty, logSuccess } from './helpers/logTools';

// Insert initial data to database, if it's empty
import './initDB/initializeDB';

const port = process.env.PORT || 3003;
const app: Application = express();

// Define middlewares
app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
);

// Define favicon
app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')));

// Config apis prefix & routes
app.use('/api/', transactionsRoutes);

// Handle frontend in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
  app.get("/*", (_req: Request, res: Response) => {
    logSuccess('Frontend Fired');
    res.sendFile(path.resolve("index.html"));
  });
}

// Listen to API requests on the mentioned port
app.listen(port, () => {
  logEmpty();
  logSuccess('Backend server is running, listening on port ' + port);
  logEmpty();
});
