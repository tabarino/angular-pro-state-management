import { Request, Response } from 'express';
import { PLAYLIST } from './db-data';

export function getPlaylist(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(PLAYLIST) });
}
