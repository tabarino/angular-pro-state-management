import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '../../../store';
import { Song } from '../models/song.model';
import { SongsService } from '../../services/songs.service';

@Component({
    selector: 'songs-favourites',
    templateUrl: './songs-favourites.component.html',
    styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {
    favourites$: Observable<Song[]>;

    constructor(
        private store: Store,
        private songsService: SongsService
    ) { }

    ngOnInit(): void {
        this.favourites$ = this.store.select('playlist').pipe(
            filter(Boolean),
            map((playlist: any[]) => playlist.filter(track => track.favourite))
        );
    }

    onToggle(event: any) {
        this.songsService.toggle(event);
    }
}
