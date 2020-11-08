import { Request, Response } from 'express';
import { PLAYLIST } from './db-data';

export function savePlaylist(req: Request, res: Response) {
    const id = req.params.id;
    const changes = req.body;

    PLAYLIST[id] = {
        ...PLAYLIST[id],
        ...changes
    };

    res.status(200).json(PLAYLIST[id]);
}
