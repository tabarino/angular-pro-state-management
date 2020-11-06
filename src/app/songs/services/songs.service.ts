import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Store } from '../../store';
import { convertSnaps } from './db-utils';

@Injectable()
export class SongsService {
    getPlaylist$ = this.http.get<any[]>('/api/playlists').pipe(
        map(snaps => convertSnaps<any>(snaps)),
        tap(next => this.store.set('playlist', next)),
        catchError(error => throwError(error))
    );

    constructor(
        private http: HttpClient,
        private store: Store
    ) { }
}
