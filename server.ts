import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { limiter } from './configs/rateLimit';


const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(routes);

app.listen(3333, () => { console.log('\x1b[36m🏃‍♂️running server🏃‍♂️'); })
