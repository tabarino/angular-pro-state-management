import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../../store';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'songs-favourites',
    templateUrl: './songs-favourites.component.html',
    styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {
    favourites$: Observable<any[]>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.favourites$ = this.store.select('playlist').pipe(
            filter(Boolean),
            map((playlist: any[]) => playlist.filter(track => track.favourite))
        );
    }
}
