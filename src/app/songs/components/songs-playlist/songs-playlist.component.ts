import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

@Component({
    selector: 'songs-playlist',
    templateUrl: './songs-playlist.component.html',
    styleUrls: ['./songs-playlist.component.scss']
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
    playlist$: Observable<any[]>;
    subscription: Subscription;

    constructor(
        private store: Store,
        private songsService: SongsService
    ) { }

    ngOnInit(): void {
        this.playlist$ = this.store.select('playlist');

        // This only needs to be done once, so it's not necessary to do it in the other components
        this.subscription = this.songsService.getPlaylist$.subscribe();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
