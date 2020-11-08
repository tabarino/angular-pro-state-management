import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Store } from '../../store';
import { convertSnaps } from './db-utils';
import { Song } from '../components/models/song.model';

@Injectable()
export class SongsService {
    getPlaylist$: Observable<Song[]> = this.http.get<Song[]>('/api/playlist').pipe(
        map(snaps => convertSnaps<any>(snaps)),
        tap(next => this.store.set('playlist', next)),
        catchError(error => throwError(error))
    );

    constructor(
        private http: HttpClient,
        private store: Store
    ) { }

    toggle(event: any) {
        this.http.put(`/api/playlist/${ event.track.id }`, event.track)
            .subscribe((track: Song) => {
                const playlist = this.store.value.playlist;
                const newPlaylist = playlist.map((song: Song) => {
                    if (track.id === song.id) {
                        return {
                            ...song,
                            ...track
                        };
                    } else {
                        return song;
                    }
                });

                this.store.set('playlist', newPlaylist);
            });
    }
}
