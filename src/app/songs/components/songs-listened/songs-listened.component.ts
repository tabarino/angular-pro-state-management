import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '../../../store';
import { Song } from '../models/song.model';

@Component({
    selector: 'songs-listened',
    templateUrl: './songs-listened.component.html',
    styleUrls: ['./songs-listened.component.scss']
})
export class SongsListenedComponent implements OnInit {
    listened$: Observable<Song[]>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.listened$ = this.store.select('playlist').pipe(
            filter(Boolean),
            map((playlist: any[]) => playlist.filter(track => track.listened))
        );
    }
}
