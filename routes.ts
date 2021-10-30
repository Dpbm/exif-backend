import Router from 'express';
import multer from 'multer';
import { storage } from './configs/multer';
import files from './routes/files';

const routes = Router();
const upload = multer({storage});

routes.post('/files', upload.any(), files)

export default routes;