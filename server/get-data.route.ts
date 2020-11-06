import { Request, Response } from 'express';
import { PLAYLIST } from './db-data';

export function getPlaylists(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(PLAYLIST) });
}
