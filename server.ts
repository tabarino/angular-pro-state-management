import * as express from 'express';
import { Application } from 'express';
import { getPlaylists } from './server/get-data.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/playlists').get(getPlaylists);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
