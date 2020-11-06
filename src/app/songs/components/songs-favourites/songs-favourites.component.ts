import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../../store';

@Component({
    selector: 'songs-favourites',
    templateUrl: './songs-favourites.component.html',
    styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {
    favourites$: Observable<any[]>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.favourites$ = this.store.select('playlist');
    }
}
