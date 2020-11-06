import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../../store';
import { filter, map } from 'rxjs/operators';
import { Song } from '../models/song.model';

@Component({
    selector: 'songs-favourites',
    templateUrl: './songs-favourites.component.html',
    styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {
    favourites$: Observable<Song[]>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.favourites$ = this.store.select('playlist').pipe(
            filter(Boolean),
            map((playlist: any[]) => playlist.filter(track => track.favourite))
        );
    }
}
