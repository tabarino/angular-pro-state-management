import * as express from 'express';
import { Application } from 'express';
import { getPlaylist } from './get-data.route';
import { savePlaylist } from './save-data.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/playlist').get(getPlaylist);
app.route('/api/playlist/:id').put(savePlaylist);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
