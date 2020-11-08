import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '../models/song.model';

@Component({
    selector: 'songs-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './songs-list.component.html',
    styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
    @Input() list: Song[];
    @Output() toggle = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    toggleItem(index: number, property: string) {
        const track = this.list[index];
        this.toggle.emit({
            track: {
                ...track,
                [property]: !track[property]
            }
        });
    }
}
